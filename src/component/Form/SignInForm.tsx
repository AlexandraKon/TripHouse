import {
    FormBlock,
    FormTitle,
    FormContent,
    InputTitle,
    FormInput,
    FormButton,
  } from "./styles";
  import { database } from "../../firebase/firebase";
  import { useEffect, useRef, ChangeEvent, useState, FormEvent } from "react";
  import { Link } from "react-router-dom";

export const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setAuth] = useState<boolean>(false);
    const usersRef = useRef<any>();

    useEffect(() => {
        usersRef.current = database().ref("/users");
    }, []);

    const handleSubmit = () => {
        usersRef.current.push({ email: email, password: password });
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <FormBlock onSubmit={handleSubmit}>
        <FormTitle>Sing in</FormTitle>
        <FormContent>
            <InputTitle>Email address</InputTitle>
            <FormInput onChange={handleEmailChange} value={email} />
            <InputTitle>Password</InputTitle>
            <FormInput onChange={handlePasswordChange} value={password} />
        </FormContent>
        <Link to="/stays">
            <FormButton>Sign in</FormButton>
        </Link>
        </FormBlock>
    );
};