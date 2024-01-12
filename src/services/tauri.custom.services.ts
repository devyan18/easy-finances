import { invoke } from "@tauri-apps/api/tauri";
import { TauriInvoke, TauriInvokeResponse } from "@/types/tauris.api";
import { FixedCost } from "@/types/finances";

export const addFixedCost = async (fixedCost: {
  name: string;
  amount: number;
}) => {
  try {
    const response = await invoke<TauriInvokeResponse<FixedCost>>(
      TauriInvoke.ADD_FIXED_COST,
      { newCost: fixedCost }
    );

    if (response.status !== 200 || !response.data) {
      throw new Error(response.message);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error adding fixed cost");
  }
};
