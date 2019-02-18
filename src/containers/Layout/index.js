import React, { Component } from "react";

//Styles
import Styles from "./styles.module.scss";

class index extends Component {
    render() {
        return (
            <main className={Styles.Layout}>
                <header className={Styles.header} />
            </main>
        );
    }
}

export default index;
