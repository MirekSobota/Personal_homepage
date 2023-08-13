import { useEffect } from "react";
import { Container, GitHub, Header, SubTitle, StyledList, StyledListItem, SubHeader, StyledLink, Paragraph, Description } from "./styled";
import { useDispatch, useSelector } from "react-redux";

import { fetchDataFromGitHubLoad, selectRepositoryState, selectStatus } from "./portfolioSlice";
import { Loading } from "./features/loading";


export const Portfolio = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositoryState);
  const status = useSelector(selectStatus);
  useEffect(() => {
    dispatch(fetchDataFromGitHubLoad());
  }, [dispatch]);

  return status === "loading" ?(
    <Container>
      <GitHub />
      <Header>Portfolio</Header>
      <SubTitle>My recent projects</SubTitle>
      <Loading />
    </Container>
    
  ) : (
    <Container>
      <GitHub />
      <Header>Portfolio</Header>
      <SubTitle>My recent projects</SubTitle>
      <StyledList>
        {repositories.map((repo) => (
          <StyledListItem key={repo.id}>
            <SubHeader>{repo.name}</SubHeader>
            <Description>{repo.description}</Description>
            <Paragraph>
              Code: <StyledLink href={repo.html_url}>{repo.html_url}</StyledLink>{" "}
            </Paragraph>
            <Paragraph>
              Demo: <StyledLink href={repo.homepage}>{repo.homepage}</StyledLink>{" "}
            </Paragraph>
          </StyledListItem>
        ))}
      </StyledList>
    </Container>
  );
};
