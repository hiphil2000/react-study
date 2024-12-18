import mssql from "mssql";
import "dotenv/config";

const CONNECTION_STRING = process.env.CONNECTION_STRING!;

export async function ExecuteProcedure<T extends any>(name: string, params: any) {
    const conn = await mssql.connect(CONNECTION_STRING);
    const request = conn.request();

    for (const key in params) {
        request.input(key, params[key]);
    }

    const result = await request.execute<T>(name);
    await conn.close();

    return result;
}

export async function Query(query: string, params: any) {
    const conn = await mssql.connect(CONNECTION_STRING);
    const request = conn.request();

    for (const key in params) {
        request.input(key, params[key]);
    }

    const result = await request.query(query);
    await conn.close();

    return result;
}