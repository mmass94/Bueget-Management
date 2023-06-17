import { useSelector } from "react-redux";
import { saveAs } from "file-saver";
import Button from "./formElements/button";

const SaveExpensesButton = () => {
  const expenses = useSelector((state) => state.expense.expenses);
  const accounts = useSelector((state) => state.account.accounts);
  const currentUser = useSelector((state) =>
    state.auth.users.find((user) => user.isAuthenticated)
  );

  const handleSaveClick = () => {
    const data = {
      User: {
        fullName: currentUser.fullName,
      },
      Accounts: accounts,
      Expenses: expenses,
    };

    const jsonData = JSON.stringify(data);

    const blob = new Blob([jsonData], {
      type: "application/json",
    });
    saveAs(blob, "data.json");
  };

  return (
    <Button
      ButtonName={"Save Accounts and Expenses as JSON"}
      onClick={handleSaveClick}
      color={"secondary"}
      size={"small"}
    ></Button>
  );
};

export default SaveExpensesButton;
