export interface IUseCase {
    execute: () => Promise<any>| Array<Promise<any>>;
    validate?: () => boolean;
}