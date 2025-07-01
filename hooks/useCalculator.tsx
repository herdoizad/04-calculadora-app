import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  sustract = "-",
  multiply = "x",
  divide = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("");
  const [number, setNumber] = useState("0");
  const [prevNumbr, setPrevNumbr] = useState("0");

  const lastOperation = useRef<Operator | null>(null);

  useEffect(() => {
    setFormula(number);
  }, [number]);

  const clean = () => {
    setFormula("0");
    setNumber("0");
    setPrevNumbr("0");
    lastOperation.current = null;
  };

  const buildNumber = (numberString: string) => {
    console.log(numberString);
    console.log(number);

    if (number === "0") {
      return setNumber(numberString);
    }

    setNumber(number + numberString);
    console.log(numberString);
  };

  return {
    //Props
    formula,
    number,
    prevNumbr,

    //Methods
    buildNumber,
    clean,
  };
};
