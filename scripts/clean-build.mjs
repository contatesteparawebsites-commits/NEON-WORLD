import { readFileSync, writeFileSync } from "node:fs";
const path="game.js";
const source=readFileSync(path,"utf8").replace(/[ \t]+$/gm,"");
writeFileSync(path,source);
