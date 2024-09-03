import React from "react";
import { Expense } from "../App";

interface Props {
  expenses: Expense[];
  category: string;
  onDelete: (id: number) => void;
}

export const ExpenseTable = ({ expenses, category, onDelete }: Props) => {
  return (
    <div style={{ margin: "2rem" }}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses
            .filter((expense) => {
              if (category === "All Categories") {
                return expense;
              } else {
                return expense.category === category;
              }
            })
            .map((expense) => (
              <tr key={expense.id}>
                <td>{expense.id}</td>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Total</td>
            <td>
              $
              {expenses
                .filter((expense) => {
                  if (category === "All Categories") {
                    console.log("from the expense table" + category);
                    return expense;
                  } else {
                    return expense.category === category;
                  }
                })
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
