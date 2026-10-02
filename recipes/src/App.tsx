import "./App.css";
import { Router, Route } from '../Router';
// import all the recipe pages
import Dashboard from "./Dashboard";
import LPCR from "./recipes/Lemon Pepper Chicken Rice";
import MCKCR from "./recipes/Mexican-ish Chicken & Kala Chana Rice";
import CTR from "./recipes/Chicken Tikka Rice";
import MEPR from "./recipes/Masala Egg + Paneer Rice";
import GPSCR from "./recipes/Garlic Pepper Soy Chicken Rice";
import MCPR from "./recipes/Mediterranean Chickpea Paneer Rice";
import RCCP from "./recipes/Rice-Cooker Chicken Pulao";
import CPCR from "./recipes/Chilli Peanut Chicken Rice";
import CFR from "./recipes/Chicken Fajita Rice";
import TBCR from "./recipes/Tomato Basil Chicken Rice";
import GMPMR from "./recipes/Green Moong + Paneer Masala Rice";
import LHCR from "./recipes/Lemon Herb Chicken Rice";
import FRPB from "./recipes/Fried Rice Protein Bowl";
import GL from "./recipes/Grocery List";

function App() {

  return (
    <div>
      <main>
      <Router>
        <Route path="/" component={Dashboard}/>
        <Route path="/lpcr" component={LPCR} />
        <Route path="/mckcr" component={MCKCR} />
        <Route path="/ctr" component={CTR} />
        <Route path="/mepr" component={MEPR} />
        <Route path="/gpscr" component={GPSCR} />
        <Route path="/mcpr" component={MCPR} />
        <Route path="/rccp" component={RCCP} />
        <Route path="/cpcr" component={CPCR} />
        <Route path="/cfr" component={CFR} />
        <Route path="/tbcr" component={TBCR} />
        <Route path="/gmpmr" component={GMPMR} />
        <Route path="/lhcr" component={LHCR} />
        <Route path="/frpb" component={FRPB} />
        <Route path="/gl" component={GL} />
      </Router>
      </main>
    </div>
  );
}

export default App;
