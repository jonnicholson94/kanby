
export interface IApiResponse<T> {
    data: T | null,
    error: unknown
}