import mssql from "mssql";
import "dotenv/config";

const CONNECTION_STRING = process.env.CONNECTION_STRING!;

export async function ExecuteProcedure<T extends any>(name: string, params: any) {
    const conn = await mssql.connect(CONNECTION_STRING);
    const result = conn.request();

    for (const key in params) {
        result.input(key, params[key]);
    }

    const response = await result.execute<T>(name);

    await conn.close();

    return response;
}

export async function Query(query: string) {
    const conn = await mssql.connect(CONNECTION_STRING);
    const result = await conn.request().query(query);

    await conn.close();

    return result.recordset;
}