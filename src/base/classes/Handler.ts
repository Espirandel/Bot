import { glob } from "glob";
import IHandler from "../interfaces/IHandler";
import path from "path";
import CustomClient from "./CustomClient";
import Event from "./Event";

export default class Handler implements IHandler {

    client: CustomClient;

    constructor(client: CustomClient) {
        this.client = client;
    }

    async loadEvents() {
        const files = (await glob(`build/events/**/*.js`)).map((file: string) => path.resolve(file));

        files.map(async (file: string) => {
            const event: Event = new (await import(file)).default(this.client);

            if (!event.name) {
                console.log(`O arquivo ${file.split('/').pop()} não contém nome.`);
                return delete require.cache[require.resolve(file)];
            }

            const execute = (...args: any) => event.execute(...args);

            //@ts-ignore
            event.once ? this.client.once(event.name, execute) : this.client.on(event.name, execute);

            return delete require.cache[require.resolve(file)];
        }
        )
    }
}