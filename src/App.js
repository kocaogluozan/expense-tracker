import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import DUMMY_EXPENSES from "./dummyExpenses";
const App = () => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    setFilteredYear(expense.date.getFullYear().toString());
  };

  const removeExpenseHandler = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        filteredYear={filteredYear}
        onSetFilteredYear={setFilteredYear}
        items={expenses}
        onRemoveItem={removeExpenseHandler}
      />
    </div>
  );
};

export default App;
