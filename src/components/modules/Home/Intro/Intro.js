import React from "react";
import FlexPageSection from "../../../../components/common/FlexPageSection";
import RainbowBar from "../../../../components/common/RainbowBar";

import {
  CenteredTitle,
  Wrapper,
  IntroDescriptionWrapper,
  IntroSummaryBox,
  IntroDescription
} from "./StyledIntro";

import theme from "../../../../styles/theme.js";

export default function Intro() {
  return (
    <FlexPageSection>
      <Wrapper>
        <CenteredTitle>
          Keeping tech{" "}
          <span
            style={{
              backgroundColor: "#1c1c1c",
              color: "#f0edee",
              fontSize: "5rem",
              paddingLeft: ".3rem",
              paddingRight: ".3rem"
            }}
          >
            human
          </span>
        </CenteredTitle>
        <RainbowBar width="60%" />
        <IntroDescriptionWrapper>
          <IntroSummaryBox>
            <div>The Dev Launchers formula:</div>
            <div
              style={{
                fontSize: "3rem"
              }}
            >
              <div
                style={{
                  color: theme.colors.ACCENT_2
                }}
              >
                Projects
              </div>
              <div
                style={{
                  color: theme.colors.ACCENT_4
                }}
              >
                +Learners
              </div>
              <div
                style={{
                  color: theme.colors.ACCENT_3
                }}
              >
                +Leaders
              </div>
            </div>
          </IntroSummaryBox>
          <IntroDescription>
            <ol
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                fontSize: "2rem",
                marginTop: "0"
              }}
            >
              <li>
                Dev Launchers builds open source{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: theme.colors.ACCENT_2,
                    textDecorationThickness: ".4rem",
                    textUnderlineOffset: ".1rem"
                  }}
                >
                  software projects led by professionals
                </span>
              </li>
              <li>
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: theme.colors.ACCENT_4,
                    textDecorationThickness: ".4rem",
                    textUnderlineOffset: ".1rem"
                  }}
                >
                  New developers join project teams
                </span>{" "}
                to work and learn in a supportive environment
              </li>
              <li>
                <span
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: theme.colors.ACCENT_3,
                    textDecorationThickness: ".4rem",
                    textUnderlineOffset: ".1rem"
                  }}
                >
                  Dev Launchers runs weekly workshops
                </span>{" "}
                to provide experience for leaders and learners while working on
                their projects
              </li>
            </ol>
          </IntroDescription>
        </IntroDescriptionWrapper>
      </Wrapper>
    </FlexPageSection>
  );
}
