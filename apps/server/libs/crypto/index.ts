import path from 'path';
import * as forge from "node-forge";
const fs = require('fs').promises;
import "dotenv/config";

const DES_KEY = process.env.DES_KEY!.split(',').map(Number);
const DES_IV = process.env.DES_IV!.split(',').map(Number);

export async function RSADecrypt(data: string): Promise<string | null> {
    try {
        // Private Key 파일 로드
        const keyPath = path.join(__dirname, "../../privatekey.pem");
        const privateKeyString = await fs.readFile(keyPath, 'utf8');
        const privateKey = forge.pki.privateKeyFromPem(privateKeyString);

        const encrypted = forge.util.decode64(data);
        return privateKey.decrypt(encrypted, "RSA-OAEP");
    } catch (err) {
        console.error('Decryption Error:', err);
        return null;
    }
}

// Triple DES로 데이터를 암호화하는 함수
export function TripleDESCBCEncrypt(data: string): string {
    try {
        // 키와 IV를 바이너리 문자열로 변환
        const key = String.fromCharCode(...DES_KEY);
        const iv = String.fromCharCode(...DES_IV);

        // Triple DES CBC 암호화 객체 생성
        const cipher = forge.cipher.createCipher('3DES-CBC', key);
        cipher.start({ iv });

        // 데이터 업데이트 (암호화할 평문)
        cipher.update(forge.util.createBuffer(data, 'utf8'));
        cipher.finish();

        // 암호화된 데이터를 Base64로 인코딩
        const encryptedBase64 = forge.util.encode64(cipher.output.getBytes());
        console.log('Encrypted Data (Base64):', encryptedBase64);

        return encryptedBase64;
    } catch (err) {
        console.error('Encryption Error:', (err as Error).message);
        throw err;
    }
}