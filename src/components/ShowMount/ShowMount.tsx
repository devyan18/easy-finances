import styles from "./styles.module.css";

import { useEffect, useState } from "react";

type Props = {
  mount: number;
  title: string;
};

const formatNumber = (salary: number) => {
  const salaryStr = salary.toString();

  const datos = salaryStr.split("").reverse();
  let str = "";
  for (let i = 0; i < datos.length; i++) {
    if (!(i % 3) && i) {
      str += ".";
    }

    str += datos[i];
  }

  return str
    .split(".")
    .map((e) => e.split("").reverse().join(""))
    .reverse()
    .join(".");
};

const divideIntPartAndDecimalPart = (salary: number) => {
  const salaryStr = salary.toString();

  const intPart = salaryStr.split(".")[0];
  const decimalPart = salaryStr.split(".")[1];

  return {
    intPart,
    decimalPart: decimalPart || "0",
  };
};

const formatDecimals = (decimals: string) => {
  return decimals.length === 1 ? `${decimals}0` : decimals;
};

export const ShowMount = ({ mount, title }: Props) => {
  const [integers, setIntegers] = useState<string>("");

  const [decimals, setDecimals] = useState<string>("");

  useEffect(() => {
    const { intPart, decimalPart } = divideIntPartAndDecimalPart(
      parseFloat(mount.toFixed(2))
    );

    setIntegers(intPart);
    setDecimals(decimalPart);
  }, [mount]);

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <div>
        <div>
          <span>${formatNumber(+integers)}</span>
        </div>
        <div>
          <span>{formatDecimals(decimals)}</span>
        </div>
      </div>
    </div>
  );
};
