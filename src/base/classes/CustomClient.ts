import { Client } from "discord.js"
import ICustomClient from "../interfaces/ICustomClient";
import IConfig from "../interfaces/IConfig";
import Handler from "./Handler";

export default class CustomClient extends Client implements ICustomClient {
    config: IConfig;
    handler: Handler;

    constructor() {
        super({ intents: [] });
        
        this.config = require(`${process.cwd()}/data/config.json`);
        this.handler = new Handler(this);
    }

    init(): void {
        this.loadHandlers();

        this.login(this.config.token)
        .catch((ex) => console.log("Oops, o sistema lançou uma exceção:\n", ex));
    }
    
    loadHandlers(): void {
        this.handler.loadEvents();
    }
}