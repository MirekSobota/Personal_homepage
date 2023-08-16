import {
  Wrapper,
  About,
  Image,
  ThisIs,
  Name,
  Content,
  HireMeButton,
  HireMe,
  EmailIcon,
} from "./styled";
import picture from "./images/mireksobota.jpg";
import { email } from "../../../common/personalData";

export const Header = () => {
  return (
    <>
      <Wrapper>
        <Image src={picture} alt="Mirek Sobota" />
        <About>
          <ThisIs>This is</ThisIs>
          <Name>Mirek Sobota</Name>
          <Content>
            👨🏻‍💻 I’m a passionate Frontend Developer in love with React, currently
            looking for new job opportunities.{" "}
          </Content>
          <HireMeButton>
            <HireMe
              href={`mailto:${email}`}
              title={email}
              rel="noopener noreferrer"
            >
              <EmailIcon />
              HireMe
            </HireMe>
          </HireMeButton>
        </About>
      </Wrapper>
    </>
  );
};
