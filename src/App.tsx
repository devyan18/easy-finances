import { invoke } from "@tauri-apps/api/tauri";

import { useEffect } from "react";

function App() {
  const getBalanceFileData = async () => {
    await invoke("create_balance_file");
  };

  const getAdvanceFileData = async () => {
    const data = await invoke("advanced_finances");
    console.log(data);
  };

  useEffect(() => {
    getBalanceFileData();
  }, []);

  return (
    <div>
      <h1>Hola mundo</h1>
      <button onClick={getAdvanceFileData}>Click me!</button>
    </div>
  );
}

export default App;
