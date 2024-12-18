import {ExecuteProcedure, Query} from "./dbUtils";

export async function IMSLogin(username: string, password: string) {
    const params = {
        UserID: username,
        Password: password
    };

    return await ExecuteProcedure<any>("uSP_LOGIN_SELECT", params);
}

export async function UserSelect(userId: string) {
    const params = {
        UserID: userId
    };

    return await Query(`
        SELECT  EmpNo
            ,   UserID
            ,   UserName
            ,   DeptID
        FROM    TB_User
        WHERE   UserId  = @UserID
    `, params);
}