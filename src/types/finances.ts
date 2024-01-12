export interface BalanceFile {
  salary: number;
  fixed_costs: number;
  investments: number;
  savings: number;
  variable_costs: number;
}

export interface FixedCost {
  name: string;
  amount: number;
}
