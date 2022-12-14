const { showMenu, pause } = require("./helpers/messages");

require("colors");
console.clear();

const main = async () => {
  console.log("Hola mundo");

  let opt = "";

  do {
    opt = await showMenu();
    console.log({ opt });
    await pause();

    if (opt !== "0") await pause();
  } while (op !== "0");

  pause();
};

main();
