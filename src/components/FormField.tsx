import React from "react";
import { categories, Expense } from "../App";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  description: z.string().min(1, { message: "description is required" }),
  amount: z.number(),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  addExpense: (description: string, amount: number, category: string) => void;
}

export const FormField = ({ addExpense }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    addExpense(data.description, data.amount, data.category);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "2rem" }}>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          {...register("description")}
          className="form-control"
          id="description"
          type="text"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          {...register("amount", { valueAsNumber: true })}
          className="form-control"
          id="Amount"
          type="number"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Category</label>
        <select id="category" className="form-select" {...register("category")}>
          {categories
            .filter((category) => category !== "All Categories")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
