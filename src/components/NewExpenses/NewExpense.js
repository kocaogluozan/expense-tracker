import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataWithIDHandler = (newExpense) => {
    const newExpenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseData);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataWithIDHandler}
          onCloseInputForm={stopEditingHandler}
        />
      )}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
