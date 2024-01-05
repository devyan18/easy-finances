import { useState, useEffect } from "react";

/*
  salario -> en inglés -> salary 
  gastos fijos -> en inglés -> fixed expenses (internet, renta, etc) 60%
  inversion -> en inglés -> investment (inversión) 10%
  ahorros -> en inglés -> savings (ahorros o ahorro) 10%
  gastos variables -> en inglés -> variable expenses (comida, transporte, etc) 20%
*/
enum TYPE_REMUNERATION {
  YEARLY = "YEARLY",
  MONTHLY = "MONTHLY",
  WEEKLY = "WEEKLY",
  DAILY = "DAILY",
}

interface FixedExpense {
  title: string;
  amount: number;
}

interface Investment {
  title: string;
  amount: number;
  typeOfReturn: TYPE_REMUNERATION;
  percentageOfReturn: number;
}

export const useFinances = () => {
  const [salary, setSalary] = useState(0.0);

  const [fixedExpensesList, setFixedExpensesList] = useState<FixedExpense[]>(
    []
  );
  const [investmentList, setInvestmentList] = useState<Investment[]>([]);

  const [fixedExpenses, setFixedExpenses] = useState(0.0);
  const [investment, setInvestment] = useState(0.0);
  const [variableExprenses, setVariableExprenses] = useState(0.0);

  const [savings, setSavings] = useState(0.0);

  const salaryChangeHandler = (mount: number) => {
    setSalary(mount);
  };

  const addFixedExpenses = (title: string, amount: number) => {
    setFixedExpensesList((prev) => [...prev, { title, amount }]);
  };

  const addInvestment = (
    title: string,
    amount: number,
    typeOfReturn: TYPE_REMUNERATION,
    percentageOfReturn: number
  ) => {
    setInvestmentList((prev) => [
      ...prev,
      { title, amount, typeOfReturn, percentageOfReturn },
    ]);
  };

  useEffect(() => {
    if (fixedExpensesList.length < 1) return;
    const totalFixedExpenses = fixedExpensesList.reduce(
      (acc, { amount }) => acc + amount,
      0
    );

    setFixedExpenses(totalFixedExpenses);
  }, [fixedExpensesList]);

  useEffect(() => {
    if (investmentList.length < 1) return;
    const totalInvestment = investmentList.reduce(
      (acc, { amount }) => acc + amount,
      0
    );

    setInvestment(totalInvestment);
  }, [investmentList]);

  useEffect(() => {
    if (!salary) return;

    setSavings(parseFloat((salary * 0.1).toFixed(2)));
    setVariableExprenses(parseFloat((salary * 0.2).toFixed(2)));
  }, [salary]);

  return {
    salary,
    salaryChangeHandler,
    fixedExpenses,
    fixedExpensesList,
    addFixedExpenses,
    investment,
    investmentList,
    addInvestment,
    savings,
    usables: variableExprenses,
  };
};
