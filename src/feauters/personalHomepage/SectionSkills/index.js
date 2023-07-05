import { Wrapper, SectionHeader, Divider, Item, List, Bullet } from "./styled";

export const SectionSkills = ({ title, content }) => {

    return (
        <>
            <Wrapper>
                <SectionHeader>{title}</SectionHeader>
                <Divider />
                <List>
                    {content.map((skill) => (
                        <Item key={skill}>
                            <Bullet />
                            {skill}
                        </Item>
                    ))}
                </List>
            </Wrapper>
        </>
    )
};