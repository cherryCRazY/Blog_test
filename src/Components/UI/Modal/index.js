//Core
import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import { Modal } from "antd";

class ModalUI extends Component {
    state = { show: true };

    handleModal = () => {
        const {
            errorLabel,
            errorMessage,
            successLabel,
            successMessage
        } = this.props;

        let type = successLabel ? "success" : "error";

        let message = successLabel ? successMessage : errorMessage;

        if ((errorLabel || successLabel) && this.state.show) {
            Modal[type]({
                title: "Something went wrong",
                content: message
            });
            this.setState({ show: false });
        }
        return;
    };
    render() {
        return <>{this.handleModal()}</>;
    }
}

const mapStateToProps = state => ({
    errorLabel: state.ui.get("errorLabel"),
    errorMessage: state.ui.get("errorMessage"),
    successLabel: state.ui.get("successLabel"),
    successMessage: state.ui.get("successMessage")
});

export default connect(mapStateToProps)(ModalUI);
