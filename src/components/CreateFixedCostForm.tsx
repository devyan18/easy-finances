import { addFixedCost } from "@/services/tauri.custom.services";
import { FixedCost } from "@/types/finances";
import { useState } from "react";

export const CreateFixedCostForm = () => {
  const [data, setData] = useState<FixedCost>({
    id: crypto.randomUUID().toString(),
    name: "",
    amount: 0,
    day_of_payment: "0",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addFixedCost({
      id: data.id,
      name: data.name,
      amount: parseFloat(data.amount.toString()),
      day_of_payment: data.day_of_payment,
    })
      .then(() => {
        console.log("Fixed cost created");
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col min-w-36 justify-center gap-2"
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="Internet"
      />
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        name="amount"
        onChange={handleChange}
        placeholder="100"
      />
      <label htmlFor="day_of_payment">Day of payment</label>
      <input
        type="number"
        name="day_of_payment"
        min={1}
        max={30}
        onChange={handleChange}
        placeholder="1"
      />
      <button type="submit">create</button>
    </form>
  );
};
