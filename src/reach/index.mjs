import { ask, loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const stdlib = loadStdlib();

const isAlice = await ask.ask(`Are you Alice`, ask.yesno);

const who = isAlice ? "Alice" : "Bob";

console.log(`Starting Fortune as ${who}`);

let acc = null;

const createAcc = await ask.ask(
  `Would you like to create an account (only possible in devenet)`,
  ask.yesno
);

if (createAcc) {
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
  const secret = await ask.ask(`What is your account secret?`, (x) => x);
  acc = await stdlib.newTestAccountFromSecet(secret);
}

const fortuneArr = [
  "You will become a good Reach developer",
  "You will relocate to United State",
  "You will buy Ferrari",
];

let ctc = null;
if (isAlice) {
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
  });
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}`);

const interact = { ...stdlib.hasRandom };

if (isAlice) {
  const amt = await ask.ask(
    `How much do you want to pay?`,
    stdlib.parseCurrency
  );
  interact.price = amt;
  interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
} else {
  interact.acceptPrice = async (amt) => {
    const accepted = await ask.ask(
      `Do you accept the price of ${fmt(amt)} for the fortune?`,
      ask.yesno
    );
    if (!accepted) {
      process.exit(0);
    }
  };
}

if (isAlice) {
  interact.showFortune = async (fortune) => {
    console.log(`Bob tells the fortune: ${fortune}`);
  };
  interact.acceptFortune = async () => {
    const decison = await ask.ask(`Do you accept the fortune?`, ask.yesno);
    if (decison) {
      return true;
    } else {
      return false;
    }
  };
} else {
  interact.setFortune = async () => {
    const num = Math.floor(Math.random() * fortuneArr.length);
    const fortune = await ask.ask(`Tell a fortune`, (x) => {
      return x;
    });
    return fortune;
  };
}

interact.outcome = () => {
  console.log(`Alice Accept the fortune`);
  console.log(`Money is transferred to Bob`);
};
const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);

const after = await getBalance();
console.log(`Your balance is now ${after}`);
ask.done();
