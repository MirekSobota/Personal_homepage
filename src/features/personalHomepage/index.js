import { Container } from "./Container/styled";
import { Header } from "./Header";
import { SectionSkills } from "./SectionSkills";
import { skills, toLearn } from "./SectionSkills/skills";
import { ThemeSwitcher } from "./ThemeSwitcher/index";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";


export const PersonalHomepage = () => {
    return (
        <Container>
            <ThemeSwitcher />
            <Header />
            <SectionSkills title="My skill set includes" content={skills} />
            <SectionSkills title="What I want to learn next" content={toLearn} />
            <Portfolio />
            <Footer />
        </Container>
    )
};