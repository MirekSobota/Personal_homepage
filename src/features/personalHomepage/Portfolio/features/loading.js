import { SubTitle } from "../styled";
import { Loader } from "./styled";

export const Loading = () => {
  return (
    <>
      <SubTitle>Please wait, projects are being loaded...</SubTitle>
      <Loader></Loader>
    </>
  );
};
