import { Wrapper, SectionHeader, Divider, Item, List } from "./styled";

export const SectionSkills = ({ title, content }) => {

    return (
       <>
        <Wrapper>
            <SectionHeader>{title}</SectionHeader>
            <Divider />
            <List>
                {content.map((skill) => (
                    <Item key={skill}>{skill}</Item>
                ))}
            </List>
        </Wrapper>
       </>
    )
};