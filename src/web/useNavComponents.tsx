import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import { A, Button, Div, Flex } from "../atoms";
import { Route } from "../constants";
import { ATheme } from "../atoms/links/A/types";
import { ReactComponent as TsFileIcon } from "../assets/TSX.svg";

const TsFileNavButton = ({ dataId, destination, text }) => {
    const history = useHistory();

    return (
        <Button
            variant="nav"
            id={dataId}
            key={dataId}
            onClick={() => {
                if (destination) {
                    history.push(destination);
                } else {
                    window.alert("working on it...");
                }
            }}
        >
            <Flex>
                <TsFileIcon /> <Div paddingLeft="5px">{text}</Div>
            </Flex>
        </Button>
    );
};

export const useNavComponents = () => {
    const tabList = [
        <TsFileNavButton
            dataId="NavBar-Home-Button"
            key="NavBar-Home-Button"
            destination={Route.HOME}
            text="Home.tsx"
        />,
        <TsFileNavButton
            dataId="NavBar-Resume-Button"
            key="NavBar-Resume-Button"
            destination={Route.RESUME}
            text="Resume.tsx"
        />,
        <TsFileNavButton
            dataId="NavBar-OtherStuff-Button"
            key="NavBar-OtherStuff-Button"
            destination={null}
            text="OtherStuff.tsx"
        />,
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
