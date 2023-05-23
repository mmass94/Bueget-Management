import { useDispatch } from "react-redux";
import Button from "./formElements/button";

// import { updateExpenses } from "./actions";
import { updateExpenses } from "../redux/index";

const LoadExpensesButton = () => {
  const dispatch = useDispatch();

  const handleLoadClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/json";
    fileInput.addEventListener("change", handleFileChange);
    fileInput.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = handleFileLoad;
      reader.readAsText(file);
    }
  };

  const handleFileLoad = (event) => {
    const fileContent = event.target.result;
    const parsedExpenses = JSON.parse(fileContent);
    dispatch(updateExpenses(parsedExpenses));
  };

  return (
    <div>
      <Button
        ButtonName={"load expenses from json "}
        onClick={handleLoadClick}
        color={"secondary"}
        size={"small"}
      ></Button>
      {/* <button onClick={handleLoadClick}>Load Expenses</button> */}
    </div>
  );
};

export default LoadExpensesButton;
