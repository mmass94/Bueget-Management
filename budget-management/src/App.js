import "./App.css";
import ExpenseForm from "./components/expenseForm";
import TableOfContent from "./components/table/tableOfContent";
function App() {
  return (
    <div className="App">
      <ExpenseForm />
      <TableOfContent />
    </div>
  );
}

export default App;
