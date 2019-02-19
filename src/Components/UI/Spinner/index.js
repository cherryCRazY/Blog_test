//Core
import React from "react";
import { connect } from "react-redux";

//Styles
import Styles from "./styles.module.scss";

const Spinner = props => {
    const { isFetching } = props;

    return isFetching ? (
        <div className={Styles.loaderInner}>
            <div className={Styles.loaderLineWrap}>
                <div className={Styles.loaderLine} />
            </div>
            <div className={Styles.loaderLineWrap}>
                <div className={Styles.loaderLine} />
            </div>
            <div className={Styles.loaderLineWrap}>
                <div className={Styles.loaderLine} />
            </div>
            <div className={Styles.loaderLineWrap}>
                <div className={Styles.loaderLine} />
            </div>
            <div className={Styles.loaderLineWrap}>
                <div className={Styles.loaderLine} />
            </div>
        </div>
    ) : null;
};
const mapStateToProps = state => ({
    isFetching: state.ui.get("isFetching")
});

export default connect(mapStateToProps)(Spinner);
