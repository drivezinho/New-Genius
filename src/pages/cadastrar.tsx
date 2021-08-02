import Input from "../components/Input";
import Select from "../components/Select";
import "../styles/cadastrar.scss";

export function Cadastrar() {
  console.log("foi");
  return (
    <div className="Container">
      <div className="Card-Register">
        <legend>Seus dados</legend>

        <Input name="name" label="Nome Completo" />
        <Select
          name="subject"
          label="Cargo"
          options={[
            { value: "Aluno", label: "Aluno" },
            { value: "Professor", label: "Professor" },
          ]}
        />

        <button type="button" className="button-register">
          Salvar cadastro
        </button>
      </div>
    </div>
  );
}
