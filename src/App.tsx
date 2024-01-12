import { addFixedCost } from "./services/tauri.custom.services";

function App() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const amount = formData.get("amount");

    if (!amount) return;
    if (!name) return;

    let amoutNumber = 0;
    if (typeof amount === "string") {
      amoutNumber = parseInt(amount);
      if (isNaN(amoutNumber)) return;
    }

    await addFixedCost({ name, amount: amoutNumber });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Agregar Costo Fijo</h2>
        <label htmlFor="name">Nombre: </label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="value">Valor: </label>
        <input type="number" id="value" name="amount" />
        <br />
        <button>Agregar</button>
      </form>
    </div>
  );
}

export default App;
