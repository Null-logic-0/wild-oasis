import styled from "styled-components";
import LogoIconLight from "../../public/img/logo-light.png";
import LogoIconDark from "../../public/img/logo-dark.png";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? LogoIconDark : LogoIconLight;
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
