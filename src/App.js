import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CoinPage from "./components/CoinPage";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const useStyles = makeStyles({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  });
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" Component={HomePage} exact />
          <Route path="/coins/:id" Component={CoinPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
