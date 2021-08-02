import Input from "../components/Input";
import { Link } from "react-router-dom";
import "../styles/landing.scss";
import "../styles/button.scss";
import { Cadastrar } from "./cadastrar";

export function Landing() {
  return (
    <div className="Container">
      <div className="Card-Landing">
        <Input name="name" label="Usuario:" />
        <Link to="/Home" className="give-classes">
          <button type="submit">Entrar</button>
        </Link>

        <Link to="/Cadastrar" className="give-classes">
          <button type="submit" onClick={Cadastrar}>
            Criar Conta
          </button>
        </Link>
      </div>
    </div>
  );
}
