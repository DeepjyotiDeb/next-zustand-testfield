import { sha1 } from "crypto-hash";

export const ExportInput = (file) =>
new Promise(resolve => {
    const reader = new FileReader();
    reader.onload =  async () => {
        let result = sha1(reader.result);
        resolve(result)
    }
    return reader.readAsText(file)
})