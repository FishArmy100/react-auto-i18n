import chalk from "chalk";


export const logError = (msg: string) => console.error(chalk.red.bold("[ERROR]: ") + chalk.red(msg));
export const logWarning = (msg: string) => console.warn(chalk.yellow.bold("[WARNING]: ") + chalk.yellow(msg))
export const logMessage = (msg: string) => console.log(chalk.green.bold("[LOG]: ") + chalk.green(msg));