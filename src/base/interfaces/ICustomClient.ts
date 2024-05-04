import IConfig from "./IConfig";

export default interface ICustomClient {
    config: IConfig,
    init(): void,
}