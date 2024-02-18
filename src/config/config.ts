import * as dotenv from "dotenv";
import { ConnectionOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

// abstract -> no se puede instanciar
// Se puede extender como una herencia o inicializar
export abstract class ConfigServer {
  constructor() {
    const nodeNameEnv = this.createPathEnv(this.nodeEnv);
    dotenv.config({
      path: nodeNameEnv,
    });
  }

  public getEnviroment(k: string) : string | undefined {
    return process.env[k]; // ejemplo: process.env['PORT']
  }

  public getNumberEnv(k: string): number {
    return Number(this.getEnviroment(k));
  }

  public get nodeEnv(): string {
    return this.getEnviroment('NODE_ENV')?.trim() || "";
  }

  public createPathEnv(path: string): string {
    const arrEnv: Array<string> = ['env'];

    if (path.length > 0) {
      const stringToArray = path.split('.');
      arrEnv.unshift(...stringToArray);
    }

    return '.' + arrEnv.join('.');
  }

  public get typeORMConfig(): ConnectionOptions {
    return {
      type: "mysql",
      host: this.getEnviroment("DB_HOST"),
      port: this.getNumberEnv("DB_PORT"),
      username: this.getEnviroment("DB_USER"),
      password: this.getEnviroment("DB_PASSWORD"),
      database: this.getEnviroment("DB_NAME"),
      entities: ["../entities/*.entity{.ts,.js}"],
      migrations: [__dirname + "../../migrations/*{.ts,.js}"],
      synchronize: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    };    
  }
}