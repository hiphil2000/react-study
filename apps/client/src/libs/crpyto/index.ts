import * as forge from "node-forge";
const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDFPd1GfmS8lfa7W7XyU22cE+BL
G6ZVr41aZ5euTeeGP6qMTeepI2R0wPQfhQp3rSapx+up9Dw5HcgLjsCsVMyAhXH2
ODbgHG3VOfmycAuUFnnslvR9ia/vAoQtfr3Gc2zqpWa1wB5xBRxDBSGhK5+BXEKp
iov+LuD30VrPuaT3YQIDAQAB
-----END PUBLIC KEY-----`;

export function RSAEncrypt(data: string): string {
    const publicKey = forge.pki.publicKeyFromPem(PUBLIC_KEY);
    const encrypted = publicKey.encrypt(data, "RSA-OAEP");

    return forge.util.encode64(encrypted);
}