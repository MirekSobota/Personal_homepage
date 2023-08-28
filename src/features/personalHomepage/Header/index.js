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
            👨🏻‍💻 I am a Frontend Developer with one year of experience seeking new challenges in
            programming. Currently, I'm working with React, but I'm interested
            in exploring new technologies to enhance my skills and become a
            better programmer. Looking for new job opportunities.{" "}
          </Content>
          <HireMeButton>
            <HireMe
              href={`mailto:${email}`}
              title={email}
              rel="noopener noreferrer"
            >
              <EmailIcon />
              Ask me anything!
            </HireMe>
          </HireMeButton>
        </About>
      </Wrapper>
    </>
  );
};
