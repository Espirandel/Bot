import { Client } from "discord.js"
import ICustomClient from "../interfaces/ICustomClient";
import IConfig from "../interfaces/IConfig";

export default class CustomClient extends Client implements ICustomClient {
    config: IConfig;


    constructor() {
        super({ intents: [] });
        this.config = require(`${process.cwd()}/data/config.json`);
    }

    init(): void {
        this.login(this.config.token)
            .then(() => console.log("Login bem sucedido!"))
            .catch((ex) => console.log("Oops, o sistema lançou uma exceção:\n", ex));
    }

}