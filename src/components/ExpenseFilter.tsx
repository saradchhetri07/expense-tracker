import React, { FormEvent } from "react";
import { categories } from "../App";

interface Props {
  onSelectCategory: (category: string) => void;
}

export const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div style={{ margin: "2rem" }}>
      <label className="form-label">Expense Filter</label>
      <select
        name=""
        id="category"
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
