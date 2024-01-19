import { useState } from "react";

export const useForm = <T>(initialState: T) => {
  const [form, setForm] = useState<T>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setForm(initialState);
  };
  return { form, handleChange, reset, ...form };
};
