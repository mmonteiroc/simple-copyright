#! /usr/bin/env node
import { entryPoint } from "../index";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .options({
    sample: { type: "string", demandOption: true },
    root: { type: "string", demandOption: true },
    debug: { type: "boolean", default: false },
  })
  .parseSync();

if (!!argv.sample && !!argv.root) {
  entryPoint(argv.sample, argv.root, argv.debug);
}
