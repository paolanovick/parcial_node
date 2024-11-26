import mongoose from "mongoose";

const vinoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: { type: String, required: true }, // Ej: "tinto", "blanco", "rosado"
  bodega: { type: mongoose.Schema.Types.ObjectId, ref: "Bodegas" }, // Referencia a una bodega
  precio: { type: Number, required: true, min: 0 } // Precio del vino, requerido y no negativo
});

export default mongoose.model("Vino", vinoSchema);
