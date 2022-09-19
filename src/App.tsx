import './scss/index.scss';
import { BrowserRouter as Router} from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export function App() {
  return (
    <Router>
      <AppRouter/>
    </Router>
  );
}