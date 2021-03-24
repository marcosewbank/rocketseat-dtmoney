import { Container } from "./styles";

import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="entradas" />
        </header>
        <strong>1000,00 R$</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="saídas" />
        </header>
        <strong>-2000,00 R$</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={total} alt="total" />
        </header>
        <strong>3000,00 R$</strong>
      </div>
    </Container>
  );
}
