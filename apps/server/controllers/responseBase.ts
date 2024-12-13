export interface IResponseBase<T> {
    time: number;
    success: boolean;
    message?: string;
    data?: T;
}