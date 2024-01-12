export enum TauriInvoke {
  EASY_BALANCE = "get_easy_balance",
  ADVANCE_BALANCE = "get_advance_balance",
  EASY_BALANCE_HISTORY = "get_easy_balance_history",
  ADVANCE_BALANCE_HISTORY = "get_advance_balance_history",
  ADD_FIXED_COST = "add_fixed_cost",
}

export interface TauriInvokeResponse<T> {
  status: number;
  message: string;
  data: T;
}
