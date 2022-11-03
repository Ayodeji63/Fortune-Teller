// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (0b231964)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  
  
  const v132 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v133 = stdlib.protect(ctc0, interact.price, 'for Alice\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v133, v132],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:44:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v133, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v137, v138], secs: v140, time: v139, didSend: v33, from: v136 } = txn1;
      
      sim_r.txns.push({
        amt: v137,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v137, v138], secs: v140, time: v139, didSend: v33, from: v136 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v146], secs: v148, time: v147, didSend: v41, from: v145 } = txn2;
  ;
  let v149 = false;
  let v150 = v147;
  let v157 = v137;
  
  let txn3 = txn2;
  while (await (async () => {
    const v160 = v149 ? false : true;
    
    return v160;})()) {
    const v167 = stdlib.safeAdd(v150, v138);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: ['time', v167],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v136, v137, v138, v145, v157, v167],
        evt_cnt: 0,
        funcNum: 4,
        lct: v150,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v188, time: v187, didSend: v88, from: v186 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v136,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v188, time: v187, didSend: v88, from: v186 } = txn5;
      ;
      const v189 = stdlib.addressEq(v136, v186);
      const v190 = stdlib.addressEq(v145, v186);
      const v191 = v189 ? true : v190;
      stdlib.assert(v191, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:61:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc1, await interact.inforTimeout(), {
        at: './index.rsh:37:51:application',
        fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:36:28:function exp)', 'at ./index.rsh:61:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'inforTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v173], secs: v175, time: v174, didSend: v57, from: v172 } = txn4;
      ;
      const v176 = stdlib.addressEq(v145, v172);
      stdlib.assert(v176, {
        at: './index.rsh:60:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      stdlib.protect(ctc1, await interact.showFortune(v173), {
        at: './index.rsh:66:58:application',
        fs: ['at ./index.rsh:65:15:application call to [unknown function] (defined at: ./index.rsh:65:19:function exp)'],
        msg: 'showFortune',
        who: 'Alice'
        });
      const v179 = stdlib.protect(ctc3, await interact.acceptFortune(), {
        at: './index.rsh:67:55:application',
        fs: ['at ./index.rsh:65:15:application call to [unknown function] (defined at: ./index.rsh:65:19:function exp)'],
        msg: 'acceptFortune',
        who: 'Alice'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v136, v137, v138, v145, v157, null, v179],
        evt_cnt: 2,
        funcNum: 5,
        lct: v174,
        onlyIf: true,
        out_tys: [ctc1, ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:69:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v181, v182], secs: v184, time: v183, didSend: v68, from: v180 } = txn5;
          
          ;
          const cv149 = v182;
          const cv150 = v183;
          const cv157 = v157;
          
          await (async () => {
            const v149 = cv149;
            const v150 = cv150;
            const v157 = cv157;
            
            if (await (async () => {
              const v160 = v149 ? false : true;
              
              return v160;})()) {
              const v167 = stdlib.safeAdd(v150, v138);
              sim_r.isHalt = false;
              }
            else {
              
              sim_r.txns.push({
                kind: 'from',
                to: v145,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc1, ctc3],
        waitIfNotPresent: false
        }));
      const {data: [v181, v182], secs: v184, time: v183, didSend: v68, from: v180 } = txn5;
      ;
      const v185 = stdlib.addressEq(v136, v180);
      stdlib.assert(v185, {
        at: './index.rsh:69:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv149 = v182;
      const cv150 = v183;
      const cv157 = v157;
      
      v149 = cv149;
      v150 = cv150;
      v157 = cv157;
      
      txn3 = txn5;
      continue;
      
      }
    
    }
  stdlib.protect(ctc1, await interact.outcome(), {
    at: './index.rsh:75:44:application',
    fs: ['at ./index.rsh:75:7:application call to [unknown function] (defined at: ./index.rsh:75:25:function exp)'],
    msg: 'outcome',
    who: 'Alice'
    });
  
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v137, v138], secs: v140, time: v139, didSend: v33, from: v136 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptPrice(v137), {
    at: './index.rsh:49:48:application',
    fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:15:function exp)'],
    msg: 'acceptPrice',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v136, v137, v138, null],
    evt_cnt: 1,
    funcNum: 1,
    lct: v139,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v146], secs: v148, time: v147, didSend: v41, from: v145 } = txn2;
      
      ;
      const v149 = false;
      const v150 = v147;
      const v157 = v137;
      
      if (await (async () => {
        const v160 = v149 ? false : true;
        
        return v160;})()) {
        const v167 = stdlib.safeAdd(v150, v138);
        sim_r.isHalt = false;
        }
      else {
        
        sim_r.txns.push({
          kind: 'from',
          to: v145,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v146], secs: v148, time: v147, didSend: v41, from: v145 } = txn2;
  ;
  let v149 = false;
  let v150 = v147;
  let v157 = v137;
  
  let txn3 = txn2;
  while (await (async () => {
    const v160 = v149 ? false : true;
    
    return v160;})()) {
    const v167 = stdlib.safeAdd(v150, v138);
    const v171 = stdlib.protect(ctc2, await interact.setFortune(), {
      at: './index.rsh:58:53:application',
      fs: ['at ./index.rsh:57:13:application call to [unknown function] (defined at: ./index.rsh:57:17:function exp)'],
      msg: 'setFortune',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v136, v137, v138, v145, v157, v167, v171],
      evt_cnt: 1,
      funcNum: 3,
      lct: v150,
      onlyIf: true,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:60:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v173], secs: v175, time: v174, didSend: v57, from: v172 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v167],
      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v136, v137, v138, v145, v157, v167],
        evt_cnt: 0,
        funcNum: 4,
        lct: v150,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v188, time: v187, didSend: v88, from: v186 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v136,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v188, time: v187, didSend: v88, from: v186 } = txn5;
      ;
      const v189 = stdlib.addressEq(v136, v186);
      const v190 = stdlib.addressEq(v145, v186);
      const v191 = v189 ? true : v190;
      stdlib.assert(v191, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:61:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc1, await interact.inforTimeout(), {
        at: './index.rsh:37:51:application',
        fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:36:28:function exp)', 'at ./index.rsh:61:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'inforTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v173], secs: v175, time: v174, didSend: v57, from: v172 } = txn4;
      ;
      const v176 = stdlib.addressEq(v145, v172);
      stdlib.assert(v176, {
        at: './index.rsh:60:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 5,
        out_tys: [ctc1, ctc3],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v181, v182], secs: v184, time: v183, didSend: v68, from: v180 } = txn5;
      ;
      const v185 = stdlib.addressEq(v136, v180);
      stdlib.assert(v185, {
        at: './index.rsh:69:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const cv149 = v182;
      const cv150 = v183;
      const cv157 = v157;
      
      v149 = cv149;
      v150 = cv150;
      v157 = cv157;
      
      txn3 = txn5;
      continue;
      
      }
    
    }
  stdlib.protect(ctc1, await interact.outcome(), {
    at: './index.rsh:75:44:application',
    fs: ['at ./index.rsh:75:7:application call to [unknown function] (defined at: ./index.rsh:75:25:function exp)'],
    msg: 'outcome',
    who: 'Bob'
    });
  
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAKAAEEBSAoUAgGWCYCAQAAIjUAMRhBAp8pZEkiWzUBIQdbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEDDEABMEkkDEAAtkklDEAAYCUSRCEINAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BUlIKTX+VwABFzX9gAT/uhOTNP5QNP0WUQcIULA0/zEAEkQ0/zQDIQRbNAMhBVs0A1cwIDT9MgY0AyEGW0IBYUgkNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEkSc087AyBjQDIQlbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMhBluyCCOyEDT/sgezQgFlSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQRbNf4hBVs1/VcwIDX8IQZbNftJNQU1+oAEYnpDuDT6ULAyBjQDIQlbDEQ0/DEAEkQ0/zT+FlA0/RZQNPxQNPsWUChLAVcAWGdIIQg1ATIGNQJCAQxJIwxAAEIjEkQjNAESRDQESSISTDQCEhFEKGRJNQMhBFs1/0k1BTX+gASSo1CCNP5QsDQDVwAgNP80AyEFWzEAIjIGNP9CAFVIgaCNBogBDiI0ARJENARJIhJMNAISEURJNQVJIls1/yEHWzX+gASs0R/DNP8WUDT+FlCwNP+IAN0xADT/FlA0/hZQKEsBVwAwZ0gjNQEyBjUCQgBvNf81/jX9Nfw1+zX6Nfk0/UEAE7EisgE0+rIII7IQNPyyB7NCAC40/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0gkNQEyBjUCQgAbMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v137",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v137",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v146",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T10",
                "name": "v173",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v181",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v182",
                "type": "bool"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v146",
                "type": "bool"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T10",
                "name": "v173",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v181",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "v182",
                "type": "bool"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200123938038062001239833981016040819052620000269162000235565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16020810151516200009290341460076200012e565b620000c0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200012592600292019062000158565b505050620002d2565b81620001545760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001669062000295565b90600052602060002090601f0160209004810192826200018a5760008555620001d5565b82601f10620001a557805160ff1916838001178555620001d5565b82800160010185558215620001d5579182015b82811115620001d5578251825591602001919060010190620001b8565b50620001e3929150620001e7565b5090565b5b80821115620001e35760008155600101620001e8565b604080519081016001600160401b03811182821017156200022f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024957600080fd5b62000253620001fe565b835181526040601f19830112156200026a57600080fd5b62000274620001fe565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002aa57607f821691505b60208210811415620002cc57634e487b7160e01b600052602260045260246000fd5b50919050565b610f5780620002e26000396000f3fe60806040526004361061006e5760003560e01c80639a3e39121161004b5780639a3e3912146100c3578063a7661d54146100d6578063ab53f2c6146100e9578063f662edcc1461010c57005b80631e93b0f11461007757806344f6d5b21461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610bb9565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610be3565b6102c6565b6100756100e4366004610be3565b610434565b3480156100f557600080fd5b506100fe6105e6565b604051610092929190610c06565b61007561011a366004610c63565b610683565b61012f60066000541460176108d7565b6101498135158061014257506001548235145b60186108d7565b60008080556002805461015b90610c75565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610c75565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610cc6565b90507f458813990e74aadaf5350ed96675ec04f58636ff8ec2cd046ae8a0c001800b7a338360405161021f929190610d60565b60405180910390a1610233341560156108d7565b805161024b906001600160a01b0316331460166108d7565b610253610a95565b815181516001600160a01b0391821690526020808401518351909101526040808401518351820152606080850151845193169281019290925261029a918501908501610da8565b6020808301805192151590925281514391015260808301519051604001526102c1816108fd565b505050565b6102d660016000541460096108d7565b6102f0813515806102e957506001548235145b600a6108d7565b60008080556002805461030290610c75565b80601f016020809104026020016040519081016040528092919081815260200182805461032e90610c75565b801561037b5780601f106103505761010080835404028352916020019161037b565b820191906000526020600020905b81548152906001019060200180831161035e57829003601f168201915b50505050508060200190518101906103939190610dc3565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f491533836040516103c6929190610e32565b60405180910390a16103da341560086108d7565b6103e2610a95565b815181516001600160a01b03909116905260208083018051835183015260408085015184518201528351336060909101528284018051600090528051439401939093529051915101526102c1816108fd565b61044460046000541460126108d7565b61045e8135158061045757506001548235145b60136108d7565b60008080556002805461047090610c75565b80601f016020809104026020016040519081016040528092919081815260200182805461049c90610c75565b80156104e95780601f106104be576101008083540402835291602001916104e9565b820191906000526020600020905b8154815290600101906020018083116104cc57829003601f168201915b50505050508060200190518101906105019190610e67565b90506105158160a0015143101560146108d7565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610546929190610e32565b60405180910390a161055a341560106108d7565b805161058e906001600160a01b031633146105845760608201516001600160a01b03163314610587565b60015b60116108d7565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105cb573d6000803e3d6000fd5b50600080805560018190556105e290600290610ae3565b5050565b6000606060005460028080546105fb90610c75565b80601f016020809104026020016040519081016040528092919081815260200182805461062790610c75565b80156106745780601f1061064957610100808354040283529160200191610674565b820191906000526020600020905b81548152906001019060200180831161065757829003601f168201915b50505050509050915091509091565b610693600460005414600d6108d7565b6106ad813515806106a657506001548235145b600e6108d7565b6000808055600280546106bf90610c75565b80601f01602080910402602001604051908101604052809291908181526020018280546106eb90610c75565b80156107385780601f1061070d57610100808354040283529160200191610738565b820191906000526020600020905b81548152906001019060200180831161071b57829003601f168201915b50505050508060200190518101906107509190610e67565b90506107638160a001514310600f6108d7565b604080513381528335602080830191909152840135818301529083013560608083019190915283013560808083019190915283013560a08201527fa36ef91336808a08b41f0a1d54d2c69d66104f8d893714b0c4667a15a935389a9060c00160405180910390a16107d63415600b6108d7565b60608101516107f1906001600160a01b03163314600c6108d7565b6108356040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015181870190815260608089015187168189019081526080808b0151818b0190815260066000554360015585519788019890985294519386019390935290519084015251909316928101929092525160a082015260c0015b604051602081830303815290604052600290805190602001906108d1929190610b20565b50505050565b816105e25760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6040805160208101909152600081526020820151511561095a57815160608101516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105cb573d6000803e3d6000fd5b610974826020015160200151836000015160400151610a42565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526004600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e0016108ad565b600082610a4f8382610efb565b9150811015610a8f5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016108f4565b92915050565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b508054610aef90610c75565b6000825580601f10610aff575050565b601f016020900490600052602060002090810190610b1d9190610ba4565b50565b828054610b2c90610c75565b90600052602060002090601f016020900481019282610b4e5760008555610b94565b82601f10610b6757805160ff1916838001178555610b94565b82800160010185558215610b94579182015b82811115610b94578251825591602001919060010190610b79565b50610ba0929150610ba4565b5090565b5b80821115610ba05760008155600101610ba5565b600060608284031215610bcb57600080fd5b50919050565b600060408284031215610bcb57600080fd5b600060408284031215610bf557600080fd5b610bff8383610bd1565b9392505050565b82815260006020604081840152835180604085015260005b81811015610c3a57858101830151858201606001528201610c1e565b81811115610c4c576000606083870101525b50601f01601f191692909201606001949350505050565b600060a08284031215610bcb57600080fd5b600181811c90821680610c8957607f821691505b60208210811415610bcb57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610cc157600080fd5b919050565b600060a08284031215610cd857600080fd5b60405160a0810181811067ffffffffffffffff82111715610d0957634e487b7160e01b600052604160045260246000fd5b604052610d1583610caa565b81526020830151602082015260408301516040820152610d3760608401610caa565b6060820152608083015160808201528091505092915050565b80358015158114610cc157600080fd5b6001600160a01b038316815281356020808301919091526080820190610d87908401610d50565b15156040830152610d9a60408401610d50565b151560608301529392505050565b600060208284031215610dba57600080fd5b610bff82610d50565b600060608284031215610dd557600080fd5b6040516060810181811067ffffffffffffffff82111715610e0657634e487b7160e01b600052604160045260246000fd5b604052610e1283610caa565b815260208301516020820152604083015160408201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190610e59908401610d50565b151560408301529392505050565b600060c08284031215610e7957600080fd5b60405160c0810181811067ffffffffffffffff82111715610eaa57634e487b7160e01b600052604160045260246000fd5b604052610eb683610caa565b81526020830151602082015260408301516040820152610ed860608401610caa565b60608201526080830151608082015260a083015160a08201528091505092915050565b60008219821115610f1c57634e487b7160e01b600052601160045260246000fd5b50019056fea26469706673582212207e853a4615f501254dd8a3fe749d98614c86cc3631754e6716eee11100e0ff4f64736f6c634300080c0033`,
  BytecodeLen: 4665,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:46:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:77:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:56:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:61:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:63:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
