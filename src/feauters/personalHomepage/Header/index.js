import { Wrapper, About, Image } from "./styled";
import myFoto from "./images/MirekSobotaTemp.png"

export const Header = () => {

    return (
        <>
            <Wrapper>
                <About>
                    <Image src={myFoto} alt="Mirek SObota"></Image>
                </About>
            </Wrapper>
        </>
    )
};