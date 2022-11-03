import "./App.css";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as backend from "./reach/build/index.main.mjs";
import { useState } from "react";
import { views, Loader } from "./utils/";
import {
  ConnectAccount,
  PasteContractInfo,
  SelectRole,
  WaitForAttacher,
} from "./screens";
import { AcceptFortune, DeppOutcome, Setwager } from "./views/Deployerviews";
import { AcceptPrice, AttOutcome, SetFortune } from "./views/Attacherviews";
import Timeout from "./screens/Timeout";

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
  reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
);
const fmt = (x) => reach.formatCurrency(x, 4);

function App() {
  const [account, setAccount] = useState({});
  const [view, setView] = useState(views.CONNECT_ACCOUNT);
  const [contractInfo, setContractInfo] = useState();
  const [price, setPrice] = useState(0);
  const [resolver, setResolver] = useState();
  const [fortune, setFortune] = useState("");
  const [val, setVal] = useState("");
  const [isDeployer, setIsDeployer] = useState(false);
  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = "";
      try {
        const account = mnemonic
          ? await reach.newAccountFromMnemonic(secret)
          : await reach.getDefaultAccount();
        setAccount(account);
        setView(views.DEPLOY_OR_ATTACH);
        result = "success";
      } catch (error) {
        result = "failed";
      }
      return result;
    },

    setAsDeployer: (deployer = true) => {
      if (deployer) {
        setView(views.SET_WAGER);
        setIsDeployer(true);
      } else {
        setView(views.PASTE_CONTRACT_INFO);
        setIsDeployer(false);
      }
    },

    deploy: async (wager) => {
      const contract = account.contract(backend);
      const deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector];
      Alice.deadline = deadline;
      Alice.price = reach.parseCurrency(wager);

      backend.Alice(contract, Alice);
      setPrice(wager);
      setView(views.DEPLOYING);
      const ctcInfo = JSON.stringify(await contract.getInfo(), null, 2);
      setContractInfo(ctcInfo);
      setView(views.WAIT_FOR_ATTACHER);
    },

    attach: (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      backend.Bob(contract, Bob);
      setView(views.ATTACHING);
    },
  };

  //Participant Objects
  const Common = {
    random: () => reach.hasRandom.random(),
    outcome: () => {
      setView(views.OUTCOME);
    },
  };

  const Alice = {
    ...Common,
    showFortune: async (fortune) => {
      setView(views.ACCEPT_FORTUNE);
      console.log(`${fortune}`);
      setFortune(`${fortune}`);
    },
    acceptFortune: async () => {
      return new Promise((resolve, reject) => {
        setResolver({
          resolve: (bool) => {
            resolve(bool);
            console.log(bool);
          },
        });
      });
    },
  };

  const Bob = {
    ...Common,
    acceptPrice: async (price) => {
      setView(views.ACCEPT_WAGER);
      setPrice(reach.formatCurrency(price, 4));
      return new Promise((resolve) => {
        setResolver({
          resolve: () => {
            setView(views.ATTACHING);
            resolve();
          },
        });
      });
    },
    setFortune: async () => {
      setView(views.SET_FORTUNE);
      setVal("");
      return new Promise((resolve, reject) => {
        setResolver({
          resolve: (fortune) => {
            resolve(fortune);
            console.log(fortune);
          },
        });
      });
    },
  };

  return (
    <div className="App">
      <div className="top">
        <h1>Fortune Teller</h1>
      </div>
      <header className="App-header">
        {view === views.CONNECT_ACCOUNT && (
          <ConnectAccount connect={reachFunctions.connect} />
        )}

        {view === views.DEPLOY_OR_ATTACH && (
          <SelectRole setAsDeployer={reachFunctions.setAsDeployer} />
        )}

        {view == views.SET_WAGER && <Setwager deploy={reachFunctions.deploy} />}

        {(view === views.DEPLOYING || view === views.ATTACHING) && <Loader />}

        {view === views.PASTE_CONTRACT_INFO && (
          <PasteContractInfo attach={reachFunctions.attach} />
        )}
        {view == views.ACCEPT_WAGER && (
          <AcceptPrice
            price={price}
            accept={resolver.resolve}
            decline={() => setView(views.DEPLOY_OR_ATTACH)}
          />
        )}

        {view == views.ACCEPT_FORTUNE && (
          <AcceptFortune accept={resolver.resolve} fortune={fortune} />
        )}

        {view === views.WAIT_FOR_ATTACHER && (
          <WaitForAttacher info={contractInfo} />
        )}

        {view === views.SET_FORTUNE && (
          <SetFortune
            tell={resolver.resolve}
            fortune={val}
            setFortune={setVal}
          />
        )}

        {view == views.OUTCOME &&
          (isDeployer ? <DeppOutcome /> : <AttOutcome />)}

        {view == views.TIME_OUT && <Timeout />}
      </header>
    </div>
  );
}

export default App;
