const data = require("./bigparsing_confirmed/input.json");

const arg = Number(process.argv[2]);

const dislayName = (id) => {
  const el = data.find((el) => el.id === id);
  console.log(el.name);
};

dislayName(arg);
