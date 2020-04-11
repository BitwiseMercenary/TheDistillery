import React from "react";
import { Flex, Span } from "../../../atoms";

export const WorkExperience = () => {
  return (
    <Flex flexDirection="column">
      <h2>Work Experience</h2>
      {/* Remine section */}
      <Flex flexDirection="column" textAlign="left">
        <h3>Remine</h3>
        {/* Remine section Body*/}
        <Flex flexDirection="column">
          <Flex justifyContent="space-between">
            <Span>Full Stack Software Engineer</Span>
            <Span>2018 - Present</Span>
          </Flex>
          <Flex flexDirection="column" width="600px">
            <ul style={{ textAlign: "left" }}>
              <li>
                Transitioned into a full stack engineer, executing on high level
                plans to deliver on high priority and visibility projects.
              </li>
              <li>
                Built reusable, responsive, ADA-compliant React components
                (using functional and class-based paradigms).
              </li>
              <li>
                Built efficient backend modules responsible for processing
                copious amounts of data using TypeScript, SQL, ELK.
              </li>
              <li>Contributed to company hiring decisions.</li>
              <li>Coached and Mentored junior engineers. </li>
              <li>
                Led the development effort on architecting, planning, and
                executing on a major high visibility integration feature with a
                major consumer credit reporting agency from end to end.{" "}
              </li>
              <li>
                Built a robust fault-tolerant system that is responsible for
                securely processing thousands of requests containing sensitive
                personal data.
              </li>
              <li>
                Took the reins of a critically behind-schedule project and
                delivered a robust solution on time; fulfilling important
                contractual obligations on an extremely aggressive timeline.
              </li>
            </ul>
          </Flex>
        </Flex>
      </Flex>
      {/* Accenture Section */}
      <Flex flexDirection="column" textAlign="left">
        <h3>Accenture</h3>
        <Flex flexDirection="column">
          <Flex justifyContent="space-between">
            <Span>Software Developer Analyst</Span>
            <Span>2015 - 2018</Span>
          </Flex>
          <Flex flexDirection="column" width="600px">
            <ul style={{ textAlign: "left" }}>
              <li>
                Primary responsibilities include research, design, and
                implementation of scalable Java micro-services to process large
                volumes of data daily for a client payment system.
              </li>
              <li>
                Shouldered duties as the primary developer for an R&D effort and
                performed the bulk of the development for the system.
              </li>
              <li>
                Collaborated closely with leads and other team members to create
                suitable designs to meet a fickle client's expectations on a
                tight schedule.
              </li>
              <li>
                Provided support, guidance, and knowledge for other developers
                and functional team members despite my relatively junior status.
              </li>
              <li>
                Scrutinize client requests and business requirement documents to
                identify edge case issues.
              </li>
            </ul>
          </Flex>
        </Flex>
      </Flex>
      <h3>Northrop Grumman</h3>
      <h3>SPS</h3>
      <h3>Trident Systems Inc.</h3>
    </Flex>
  );
};
