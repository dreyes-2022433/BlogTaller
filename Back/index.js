import { initServer } from "./configs/app.js"
import { config } from "dotenv"
import { connect } from "./configs/mongo.js"

config() //Cargar variables de entorno
initServer() //Iniciar el servidor
connect() //Conectar a la base de datos