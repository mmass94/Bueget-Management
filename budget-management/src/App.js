import "./App.css";
// import SignUpForm from "./components/users/signup";
// import SignInForm from "./components/users/signin";
import Box from "@mui/material/Box";
import Tabs from "./components/utilities/tabs";
import AuthTabs from "./components/utilities/authtabs";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      {isAuthenticated ? <Tabs></Tabs> : <AuthTabs></AuthTabs>}
      <Box sx={{ m: 2 }} />
    </div>
  );
}

export default App;
