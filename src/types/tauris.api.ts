export enum TauriInvoke {
  ADD_FIXED_COST = "add_fixed_cost",
  ADD_VARIABLE_COST = "add_variable_cost",
  GET_FIXED_COSTS = "get_fixed_costs",
  GET_VARIABLE_COSTS = "get_variable_costs",
}

export interface TauriInvokeResponse {
  status: number;
  message: string;
  data: string;
}
