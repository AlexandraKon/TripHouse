import { StyledNav, StyledLink } from "./styles";

export const Nav = () => {
    return (
        <StyledNav>
            <StyledLink to="/stays" className="nav__link">
                Stays
            </StyledLink>
            <StyledLink to="/stays" className="nav__link">
                Atractions
            </StyledLink>
        </StyledNav>
    );
};