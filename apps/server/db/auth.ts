import { ExecuteProcedure } from "./dbUtils";

export async function IMSLogin(username: string, password: string) {
    const params = {
        UserID: username,
        Password: password
    };

    return await ExecuteProcedure<any>("uSP_LOGIN_SELECT", params);
}