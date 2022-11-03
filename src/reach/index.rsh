"reach 0.1";

const [isResult, accepts, decline] = makeEnum(2);

const outcome = (accepted = false) => {
  if (accepted) {
    return 0;
  } else {
    return 1;
  }
};

assert(outcome(false) == decline);
assert(outcome(true) == accepts);

const common = {
  inforTimeout: Fun([], Null),
  outcome: Fun([], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    ...common,
    price: UInt,
    deadline: UInt,
    showFortune: Fun([Bytes(128)], Null),
    acceptFortune: Fun([], Bool),
  });
  const Bob = Participant("Bob", {
    ...common,
    setFortune: Fun([], Bytes(128)),
    acceptPrice: Fun([UInt], Null),
  });
  init();

  const informTimeout = () => {
    each([Alice, Bob], () => interact.inforTimeout());
  };

  Alice.only(() => {
    const deadline = declassify(interact.deadline);
    const price = declassify(interact.price);
  });
  Alice.publish(price, deadline).pay(price);

  commit();

  Bob.only(() => {
    const amt = declassify(interact.acceptPrice(price));
  });
  Bob.publish(amt);

  var condition = false;
  invariant(balance() == 1 * price);
  while (condition == false) {
    commit();
    Bob.only(() => {
      const fortune = declassify(interact.setFortune());
    });
    Bob.publish(fortune).timeout(relativeTime(deadline), () =>
      closeTo(Alice, informTimeout)
    );
    commit();

    Alice.only(() => {
      const showFortune = declassify(interact.showFortune(fortune));
      const accept = declassify(interact.acceptFortune());
    });
    Alice.publish(showFortune, accept);

    condition = accept;
    continue;
  }

  each([Alice, Bob], () => interact.outcome());
  transfer(price).to(Bob);
  commit();
});
