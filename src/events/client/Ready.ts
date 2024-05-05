import { Events } from "discord.js";
import CustomClient from "../../base/classes/CustomClient";
import Event from "../../base/classes/Event";

export default class Ready extends Event {

    constructor(client: CustomClient) {
        super(client, {
            name: Events.ClientReady,
            description: "Ready Event",
            once: true,
        })
    }

    execute() {
        console.log(`${this.client.user?.tag} está pronto!`);
    }
}