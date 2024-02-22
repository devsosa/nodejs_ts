import express from "express";
import morgan from "morgan";
import cors from "cors";
import { UserRouter } from "./user/user.router";
import { ConfigServer } from "./config/config";

//Configurar un servidor basico

class ServerBootstrap extends ConfigServer {
  public app: express.Application = express();
  // NODE no lee variables de entorno por defecto
  private port: number = this.getNumberEnv("PORT");

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.dbConnect();
    this.app.use(morgan('dev'));
    this.app.use(cors());

    /* ejecutando la primera ruta */
    /* this.app.get("/api/hola", (req,res) => {
      res.status(200).json({
        message: "Hola mundooo"
      });
    }); */
    this.app.use('/api', this.routers());
    this.listen();
  }

  routers(): Array<express.Router> {
    return [new UserRouter().router];
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}...`);
    });
  }
}

new ServerBootstrap();