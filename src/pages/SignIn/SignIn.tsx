import { StyledSignIn } from "./styles";
import { HeaderPages } from "../../component/Header/HeaderPages";
import { SignInForm } from "../../component/Form/SignInForm";

export const SignIn = () => {
  return (
    <StyledSignIn>
        <HeaderPages/>
        <SignInForm/>
    </StyledSignIn>
  );
};