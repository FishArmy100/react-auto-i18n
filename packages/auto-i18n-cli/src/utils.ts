import chalk from "chalk";


export const logError = (msg: string) => console.error(chalk.red(msg));
export const logMessage = (msg: string) => console.log(chalk.green(msg));