import { Nav } from "./Nav";
import { HeaderForPages, 
  HeaderContainer, 
  HeaderContent, 
  StyledHeader,
  StyledLogo,
  StyledToggle,
  StyledUser,
} from "./styles";

export const HeaderPages = () => {
    return (
        <HeaderForPages>
          <HeaderContainer>
              <StyledHeader className="container block">
              <StyledLogo />
              <HeaderContent>
                  <Nav/>
                <StyledToggle />
                <StyledUser />
              </HeaderContent>
            </StyledHeader>
          </HeaderContainer>
      </HeaderForPages>
    );
  };