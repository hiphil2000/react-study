import axios from "axios";
import IUser from "../models/User";

export interface ILoginRequest {
    userId: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
}

/**
 * 로그인을 수행합니다.
 * @param {ILoginRequest} request
 * @returns {Promise<ILoginResponse>}
 */
export async function login(request: ILoginRequest): Promise<ILoginResponse> {
    const response = await axios.post<ILoginResponse>("/api/auth/login", request);

    return response.data;
}

export interface IMeResponse {
    user: IUser;
}

/**
 * 로그인 사용자 정보를 불러옵니다.
 * @returns {Promise<T>}
 */
export async function me() {
    const token = sessionStorage.getItem("token");
    const response = await axios.get<IMeResponse>("/api/auth/me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}