import { Wrapper, About, Image, ThisIs, Name, Content, HireMeButton, HireMe } from "./styled";
import myFoto from "./images/MirekSobotaTemp.png";
import { email } from "../../email";


export const Header = () => {

    return (
        <>
            <Wrapper>
                <Image src={myFoto} alt="Mirek SObota"></Image>
                <About>
                    <ThisIs>This is</ThisIs>
                    <Name>Mirek Sobota</Name>
                    <Content>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Content>
                    <HireMeButton>
                        <HireMe href={`mailto:${email}`} title={email} rel="noopener noreferrer">HireMe</HireMe>
                    </HireMeButton>
                </About>
            </Wrapper>
        </>
    )
};