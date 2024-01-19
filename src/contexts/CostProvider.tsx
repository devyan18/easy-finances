import {
  getFixedCosts,
  getVariableCosts,
} from "@/services/tauri.custom.services";
import { FixedCost, VariableCost } from "@/types/finances";
import { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  costs: {
    fixedCosts: FixedCost[];
    variableCosts: VariableCost[];
  };
  getCosts: () => void;
};

const CostContext = createContext<ContextType>({
  costs: {
    fixedCosts: [],
    variableCosts: [],
  },
  getCosts: async () => {},
});

type Props = {
  children: React.ReactNode;
};

const CostProvider = (props: Props) => {
  const [fixedCost, setFixedCost] = useState<FixedCost[]>([]);
  const [variableCost, setVariableCost] = useState<VariableCost[]>([]);

  const getCost = async () => {
    const fixedCosts = await getFixedCosts();
    const variableCosts = await getVariableCosts();

    setFixedCost(fixedCosts);
    setVariableCost(variableCosts);
  };

  useEffect(() => {
    if (false) {
      getCost();
    }
  }, []);

  return (
    <CostContext.Provider
      value={{
        costs: {
          fixedCosts: fixedCost,
          variableCosts: variableCost,
        },
        getCosts: getCost,
      }}
    >
      {props.children}
    </CostContext.Provider>
  );
};
export default CostProvider;
