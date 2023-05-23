import { useSelector } from "react-redux";
import { saveAs } from "file-saver";
import Button from "./formElements/button";

const SaveExpensesButton = () => {
  const Expenses = useSelector((state) => state.expense.expenses);

  const handleSaveClick = () => {
    const jsonExpenses = JSON.stringify(Expenses);
    console.log("from JSON comp  JSON.stringify:", jsonExpenses);

    console.log("from JSON comp expenses are :", Expenses);
    const blob = new Blob([jsonExpenses], { type: "application/json" });
    saveAs(blob, "expenses.json");
  };

  return (
    <Button
      ButtonName={"save expenses into json "}
      onClick={handleSaveClick}
      color={"secondary"}
      size={"small"}
    ></Button>
  );
};

export default SaveExpensesButton;
