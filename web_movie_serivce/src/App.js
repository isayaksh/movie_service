import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  // Router를 이용하여 페이지 이동을 구축
  return (
  <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  );
}
  

export default App;
