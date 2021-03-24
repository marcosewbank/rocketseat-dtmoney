import Logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <header>
      <Container>
        <Content>
          <img src={Logo} alt="dt money" />
          <button type="button"> Nova transação</button>
        </Content>
      </Container>
    </header>
  );
}
