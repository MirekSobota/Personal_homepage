import { useEffect } from "react";
import {
  Container,
  GitHub,
  Header,
  SubTitle,
  StyledList,
  StyledListItem,
  SubHeader,
  StyledLink,
  Paragraph,
  Description,
  Wrapper,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchDataFromGitHubLoad,
  selectRepositoryState,
  selectStatus,
} from "./portfolioSlice";
import { Loading } from "./features/loading";
import { ErrorMessage } from "./features//errorMsg";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositoryState);
  const status = useSelector(selectStatus);
  useEffect(() => {
    dispatch(fetchDataFromGitHubLoad());
  }, [dispatch]);

  return status === "loading" ? (
    <Wrapper>
      <GitHub />
      <Header>Portfolio</Header>
      <SubTitle>My recent projects</SubTitle>
      <Loading />
    </Wrapper>
  ) : status === "error" ? (
    <Wrapper>
      <GitHub />
      <Header>Portfolio</Header>
      <SubTitle>My recent projects</SubTitle>
      <ErrorMessage />
    </Wrapper>
  ) : (
    <Container>
      <GitHub />
      <Header>Portfolio</Header>
      <SubTitle>My recent projects</SubTitle>
      <StyledList>
        {repositories.map((repo, index) => (
          <StyledListItem key={repo.id} delay={Math.floor(index / 2) * 0.5}>
            <SubHeader>{repo.name}</SubHeader>
            <Description>{repo.description}</Description>
            <Paragraph>
              Code:{" "}
              <StyledLink href={repo.html_url}>{repo.html_url}</StyledLink>{" "}
            </Paragraph>
            <Paragraph>
              Demo:{" "}
              <StyledLink href={repo.homepage}>{repo.homepage}</StyledLink>{" "}
            </Paragraph>
          </StyledListItem>
        ))}
      </StyledList>
    </Container>
  );
};
