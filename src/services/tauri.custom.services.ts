import { invoke } from "@tauri-apps/api/tauri";

export const createBalanceFile = async () => {
  try {
    await invoke("create_balance_file");
  } catch (error) {
    console.error(error);
  }
};
