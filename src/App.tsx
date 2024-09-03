import { useState } from "react";
import { FormField } from "./components/FormField";
import { ExpenseFilter } from "./components/ExpenseFilter";
import { ExpenseTable } from "./components/ExpenseTable";

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

export const categories = [
  "All Categories",
  "grocery",
  "utilities",
  "entertainment",
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [expense, setExpense] = useState([
    { id: 1, description: "test1", amount: 100, category: "utilities" },
    { id: 2, description: "test2", amount: 100, category: "entertainment" },
    { id: 3, description: "test3", amount: 100, category: "grocery" },
  ]);

  const setCategory = (value: string) => {
    setSelectedCategory(value);
    console.log("Selected Value in Parent:", value);
  };

  const onDelete = (id: number) => {
    setExpense(expense.filter((expense) => expense.id !== id));
  };

  const addExpense = (
    description: string,
    amount: number,
    category: string
  ) => {
    const newExpense = {
      id: expense.length + 1,
      description,
      amount,
      category,
    };
    setExpense([...expense, newExpense]);
  };

  return (
    <>
      <FormField addExpense={addExpense} />
      <ExpenseFilter onSelectCategory={setCategory} />
      <ExpenseTable
        expenses={expense}
        category={selectedCategory}
        onDelete={onDelete}
      />
    </>
  );
}

export { App };
