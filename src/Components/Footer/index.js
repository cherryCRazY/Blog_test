//Core
import React from "react";

//Components
import { Icon } from "antd";

//Styles
import Styles from "./styles.module.scss";

const index = () => {
    return (
        <footer className={Styles.footer}>
            <div>
                Test task for{" "}
                <a
                    href={
                        "https://gist.github.com/creativ/a03f890c520cb41e94a3dca6e0a04890"
                    }
                >
                    <Icon type="github" />
                </a>
            </div>
            <div>
                Created by{" "}
                <a href="https://github.com/cherryCRazY">
                    <img
                        alt="cherry"
                        height={"20"}
                        src="https://image.flaticon.com/icons/svg/1443/1443591.svg"
                    />
                </a>
            </div>
        </footer>
    );
};

export default index;
