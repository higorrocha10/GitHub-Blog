import backgroundImg from "../../assets/background.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={backgroundImg} alt="" />
    </HeaderContainer>
  );
}
