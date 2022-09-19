import { Nav } from "./Nav";
import {
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
  
  const HeaderForPages = styled.div`
    height: 150px;
    overflow: hidden;
  
    @media ${LightTheme.media.lg} {
      height: 100px;
    }
  `;
  