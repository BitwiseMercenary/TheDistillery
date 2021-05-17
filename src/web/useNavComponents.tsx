import {A, Button} from "../atoms";
import {Route} from "../constants";
import {ATheme} from "../atoms/links/A/types";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import React from "react";
import {useHistory} from "react-router-dom";
import {Theme} from "../schemes";

export const useNavComponents = () => {
    const history = useHistory();

    const tabList = [
        <Button
            theme={Theme.Leet}
            variant="nav"
            id="NavBar-Home-Button"
            key="NavBar-Home-Button"
            onClick={() => {
                history.push(Route.HOME);
            }}
        >
            Home
        </Button>,
        <Button
            theme={Theme.Leet}
            variant="nav"
            id="NavBar-Resume-Button"
            key="NavBar-Resume-Button"
            onClick={() => {
                history.push(Route.RESUME);
            }}
        >
            Resume
        </Button>,
        <Button
            theme={Theme.Leet}
            variant="nav"
            id="NavBar-OtherStuff-Button"
            key="NavBar-OtherStuff-Button"
            onClick={() => {
                window.alert("working on it...");
            }}
        >
            Other Stuff
        </Button>,
    ];

    const iconList = [
        <A
            key="LinkedIn-ButtonIcon"
            theme={ATheme.ICONLINK}
            href="https://www.linkedin.com/in/robert-mercado-30801990/"
        >
            <FaLinkedin />
        </A>,
        <A key="Github-ButtonIcon" theme={ATheme.ICONLINK} href="https://github.com/DarkseidOmega/">
            <FaGithub />
        </A>,
    ];

    return { tabList, iconList };
};
