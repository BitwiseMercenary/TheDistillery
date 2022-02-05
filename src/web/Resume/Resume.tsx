import React from "react";
import { Flex } from "../../atoms";
import { BasePage } from "../";
import { WorkExperience } from "./sections/WorkExperience";

export const Resume = () => {
    return (
        <BasePage bodyStyles={{ flexDirection: "column", alignItems: "center" }} name={"Resume"}>
            <h1>Resume</h1>
            <WorkExperience />
            <Flex>
                <h2>Skills and Technologies</h2>
            </Flex>
            <Flex>
                <h2>Education</h2>
            </Flex>
        </BasePage>
    );
};
