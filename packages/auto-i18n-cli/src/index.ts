#!/usr/bin/env node

import process from "node:process";
import { run_python } from "./python.js";

function main() 
{
    const args = process.argv.slice(2);
    run_python(args)
		.then(console.log)
		.catch(console.error);
}

main();