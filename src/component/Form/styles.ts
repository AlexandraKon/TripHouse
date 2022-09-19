import styled from "styled-components";
import { LightTheme } from "../../styles/styled-components/LightTheme";
import { getFont } from "../../styles/styled-components/mixins";

export const FormBlock = styled.form`
    margin: auto auto;
    padding: 40px 36px;
    width: 400px;
    height: 364px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${LightTheme.colors.generalWhite};
    border-radius: 8px;
`;

export const FormTitle = styled.h4`
    margin-bottom: 40px;
    ${getFont("lg", "medium", "lg")};
    color: black;
    text-align: center;
`;

export const FormContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const InputTitle = styled.p`
    margin-bottom: 8px;
    ${getFont("xs", "regular", "xs")};
    color: ${LightTheme.colors.mainText};
    text-align: left;
`;

export const FormInput = styled.input`
    width: 100%;
    height: 41px;
    margin-bottom: 16px;
    border: 2px solid ${LightTheme.colors.secondaryText};
    border-radius: 8px;
`;

export const FormButton = styled.button`
    margin-top: 8px;
    width: 320px;
    height: 48px;
    ${getFont("lg", "medium", "lg")};
    color: ${LightTheme.colors.generalWhite};
    text-align: center;
    background-color: ${LightTheme.colors.accentBlue};
    border: none;
    border-radius: 8px;
`;