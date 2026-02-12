#!/usr/bin/env node

import { run_python, TranslateArgs } from "./python.js";
import * as fs from 'fs';
import * as path from 'path';

function main() 
{
    const args: TranslateArgs = {
		langs: ["fra_Latn", "spa_Latn", "ita_Latn"],
		src_lang: "eng_Latn",
		segments: {
			"test": "This is some test text",
			"other.test": "This is more test text",
		}
	};
	
    run_python(args)
		.then(o => {
			const out_path = "out/output.txt"
			fs.mkdirSync(path.dirname(out_path), { recursive: true });
			fs.writeFileSync(out_path, JSON.stringify(o, null, 2));
		})
		.catch(console.error);
}

main();