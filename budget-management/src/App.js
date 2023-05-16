import "./App.css";
import ExpenseForm from "./components/expenseForm";
import TableOfContent from "./components/table/tableOfContent";
import Bar from "./components/visulization/barChart";
function App() {
  return (
    <div className="App">
      <ExpenseForm />
      <TableOfContent />
      <Bar />
    </div>
  );
}

export default App;
