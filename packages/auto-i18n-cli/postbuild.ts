import fs from "fs";
import path from "path";


const reqContent = fs.readFileSync("../../translator/requirements.txt");
const scriptContent = fs.readFileSync("../../translator/translate.py");

const reqPath = "./dist/translator/requirements.txt";
fs.mkdirSync(path.dirname(reqPath), { recursive: true });
fs.writeFileSync(reqPath, reqContent);

const scriptPath = "./dist/translator/translate.py";
fs.mkdirSync(path.dirname(scriptPath), { recursive: true });
fs.writeFileSync(scriptPath, scriptContent);