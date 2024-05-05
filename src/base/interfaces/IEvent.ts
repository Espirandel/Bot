import { Events } from "discord.js";
import CustomClient from "../classes/CustomClient";
import IEventOptions from "./IEventOptions";

export default interface IEvent extends IEventOptions{
    client: CustomClient,
}