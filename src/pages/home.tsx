import "../styles/home.scss";
import "../styles/button.scss";
import Cards from "../components/cards";

export function Home() {
  return (
    <div className="Container">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}
