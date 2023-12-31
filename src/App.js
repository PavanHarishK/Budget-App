import "./App.css";
import BudgetInputForm from "./Componets/Budget_Input_Component/BudgetInputForm";
import ExpensesDisplayTable from "./Componets/Expenses_Component/ExpensesDisplayTable";
import ExpensesInputForm from "./Componets/Expenses_Component/ExpensesInputForm";

function App() {
  return (
    <div className="App">
      <BudgetInputForm />
      <ExpensesInputForm />
      <ExpensesDisplayTable />
    </div>
  );
}

export default App;
