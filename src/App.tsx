import { Home } from "./pages/home";
import { Landing } from "./pages/landing";
import { Cadastrar } from "./pages/cadastrar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Cadastrar" exact component={Cadastrar} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
