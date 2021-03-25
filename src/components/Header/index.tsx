import Logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <header>
      <Container>
        <Content>
          <img src={Logo} alt="dt money" />
          <button type="button" onClick={onOpenNewTransactionModal}>
            Nova transação
          </button>
        </Content>
      </Container>
    </header>
  );
}
