import { Wrapper, About, Image, ThisIs, Name, Content, HireMeButton, HireMe, EmailIcon } from "./styled";
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
                    <Content>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Content>
                    <HireMeButton >
                        <HireMe href={`mailto:${email}`} title={email} rel="noopener noreferrer">
                            <EmailIcon />
                            HireMe
                        </HireMe>
                    </HireMeButton>
                </About>
            </Wrapper>
        </>
    )
};