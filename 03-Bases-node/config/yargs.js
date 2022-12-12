const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "The base of multiplicator table"
  })

  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Show the table in a console"
  })

  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "this is the number that defines how far you want the table to go"
  })

  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;