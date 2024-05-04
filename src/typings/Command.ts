import { ChatInputApplicationCommandData, CommandInteraction, CommandInteractionOptionResolver } from "discord.js";
import { ExtendedClient } from "../structures/Client";

/**
 * {
 *  name: "commandname",
 *  description: "Daew",
 *  run: async ({ interaction }) => {
 * 
 * }
 * }
 */

interface RunOptions {
    client: ExtendedClient,
    interaction: CommandInteraction,
    args: CommandInteractionOptionResolver
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {

} & ChatInputApplicationCommandData