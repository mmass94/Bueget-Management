import "./App.css";
import ExpenseForm from "./components/expenseForm";
import TableOfContent from "./components/table/tableOfContent";
import Bar from "./components/visulization/barChart";
import SaveExpensesButton from "./components/saveToJson";
import LoadExpensesButton from "./components/readFromJson";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      <ExpenseForm />
      <TableOfContent />
      <Bar />
      <SaveExpensesButton />
      <LoadExpensesButton />
      <Box sx={{ m: 2 }} />
    </div>
  );
}

export default App;
