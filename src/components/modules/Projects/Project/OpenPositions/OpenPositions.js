import React from "react";
import { withTheme } from "styled-components";
import {
  Wrapper,
  OpenRolesContainer,
  OpenRoleListing
} from "./StyledOpenPositions";
import { env } from "../../../../../utils/EnvironmentVariables.js";

const OpenPositions = props => {
  const projectData = props.projectData;

  return (
    <Wrapper>
      <h4>
        <u>Open Positions</u>
      </h4>
      <OpenRolesContainer>
        {projectData?.openPositions.map((element, i) => (
          <OpenRoleListing key={i}>
            <h5>{element.title}</h5>
            <p>{element.description}</p>
          </OpenRoleListing>
        ))}
      </OpenRolesContainer>
    </Wrapper>
  );
};

export default withTheme(OpenPositions);
