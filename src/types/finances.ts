export interface BalanceFile {
  salary: number;
  fixed_costs: number;
  investments: number;
  savings: number;
  variable_costs: number;
}

export interface FixedCost {
  id: string;
  name: string;
  amount: number;
  day_of_payment: string;
}

export interface VariableCost {
  id: string;
  name: string;
  amount: number;
  is_essential: boolean;
  day_of_payment: string;
}
