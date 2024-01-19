import { invoke } from "@tauri-apps/api/tauri";
import { TauriInvoke, TauriInvokeResponse } from "@/types/tauris.api";
import { FixedCost, VariableCost } from "@/types/finances";

export const addFixedCost = async (fixedCost: FixedCost) => {
  try {
    const response = await invoke<TauriInvokeResponse>(
      TauriInvoke.ADD_FIXED_COST,
      { newCost: fixedCost }
    );

    if (response.status !== 200 || !response.data) {
      throw new Error(response.message);
    }

    return JSON.parse(response.data) as FixedCost;
  } catch (error) {
    console.error(error);
    throw new Error("Error adding fixed cost");
  }
};

export const addVariableCost = async (variableCost: VariableCost) => {
  try {
    const response = await invoke<TauriInvokeResponse>(
      TauriInvoke.ADD_VARIABLE_COST,
      { newCost: variableCost }
    );

    if (response.status !== 200 || !response.data) {
      throw new Error(response.message);
    }

    return JSON.parse(response.data) as VariableCost;
  } catch (error) {
    console.log(error);
    throw new Error("Error adding variable cost");
  }
};

export const getFixedCosts = async () => {
  try {
    const response = await invoke<TauriInvokeResponse>(
      TauriInvoke.GET_FIXED_COSTS
    );

    if (response.status !== 200 || !response.data) {
      throw new Error(response.message);
    }

    return JSON.parse(response.data) as FixedCost[];
  } catch (error) {
    throw new Error("Error getting fixed costs");
  }
};

export const getVariableCosts = async () => {
  try {
    const response = await invoke<TauriInvokeResponse>(
      TauriInvoke.GET_VARIABLE_COSTS
    );

    if (response.status !== 200 || !response.data) {
      throw new Error(response.message);
    }

    return JSON.parse(response.data) as VariableCost[];
  } catch (error) {
    throw new Error("Error getting variable costs");
  }
};
