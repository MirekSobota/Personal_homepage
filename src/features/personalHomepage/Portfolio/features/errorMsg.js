import { github } from "../../../../common/personalData";
import { HireMeButton } from "../../Header/styled";
import { ErrorIcon, SubHeader, LeadParagraph, StyledLink } from "./styled";

export const ErrorMessage = () => {
  return (
    <>
      <ErrorIcon />
      <SubHeader>Ooops! Something went wrong... </SubHeader>
      <LeadParagraph>
        Sorry, failed to load Github projects. You can check them directly on
        Github.
      </LeadParagraph>
      <HireMeButton>
        <StyledLink href={github}>Go to Github</StyledLink>
      </HireMeButton>
    </>
  );
};
