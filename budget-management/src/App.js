import "./App.css";
import ExpenseForm from "./components/expenseForm";
import TableOfContent from "./components/table/tableOfContent";
import Bar from "./components/visulization/barChart";
import SaveExpensesButton from "./components/saveToJson";
import LoadExpensesButton from "./components/readFromJson";
import Box from "@mui/material/Box";
// import Line from "./components/visulization/lineChart";
import AddAccountFrom from "./components/accounts/addAcount";
import Tabs from "./components/utilities/tabs";

function App() {
  return (
    <div className="App">
      <Tabs></Tabs>

      <Box sx={{ m: 2 }} />
    </div>
  );
}

export default App;
