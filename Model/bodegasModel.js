import mongoose from "mongoose";

const bodegaSchema = new mongoose.Schema({
  nombre: { type: String, required: true }, // Nombre de la bodega
  vinos: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Vino" } // Referencia a los vinos
  ],
  cantidad: { type: Number, required: true, default: 0 }, // Cantidad de vinos
});

export default mongoose.model("Bodegas", bodegaSchema);
