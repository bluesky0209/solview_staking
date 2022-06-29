const assert = require("assert");
const anchor = require("@project-serum/anchor");
const serumCmn = require("@project-serum/common");
const { TOKEN_PROGRAM_ID, Token } = require("@solana/spl-token");
const TokenInstructions = require("@project-serum/serum").TokenInstructions;
const utils = require("./utils");
const { User, claimForUsers } = require("./user");
const fs = require("fs");

describe("spl-staking", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.SolviewStaking;
  console.log(program, "program");
  const provider = anchor.Provider.env();

  let stakingMint, users, funders;
  let poolKeypair = anchor.web3.Keypair.generate();

  it("initialized mint!", async () => {
    console.log("Program ID: ", program.programId.toString());
    console.log("Wallet: ", provider.wallet.publicKey.toString());

    stakingMint = await utils.createMint(provider, 9);
  });

  it("Initialize users", async () => {
    users = [1, 2, 3, 4, 5].map((a) => new User(a));
    await Promise.all(
      users.map((a) =>
        a.init(
          anchor.web3.LAMPORTS_PER_SOL,
          stakingMint.publicKey,
          5_000_000_000
        )
      )
    );
  });

  it("Initialize funders", async () => {
    funders = [0].map((a) => new User(a));
    await funders[0].init(
      anchor.web3.LAMPORTS_PER_SOL,
      stakingMint.publicKey,
      100_000_000_000
    );
  });

  it("Creates a pool", async () => {
    await funders[0].initializePool(poolKeypair);
  });

  it("User does some single staking", async () => {
    //we test all this in greater detail later, but this is a flow for single reward staking
    let pool = funders[0].poolPubkey;
    console.log(pool, "pool");
    let user = users[0];
    await user.createUserStakingAccount(pool);
    await user.stakeTokens(1_000_000_000);
    console.log(funders[0], "funder");
    await funders[0].fund(100_000);
    // var expected = await user.getUserPendingRewardsFunction();
    // var e = expected()
    // console.log("Expected", e[0], e[1]);
    // await wait(1);
    // e = expected()
    // console.log("Expected", e[0], e[1]);
    // await wait(1);
    // e = expected()
    // console.log("Expected", e[0], e[1]);
    // await wait(1);
    // e = expected()
    // console.log("Expected", e[0], e[1]);
    // await wait(1);
    // e = expected()
    // console.log("Expected", e[0], e[1]);
    // await wait(1);
    // e = expected()
    // console.log("Expected", e[0], e[1]);

    // await claimForUsers([user]);
    // await user.unstakeTokens(100_000);
    // await user.unstakeTokens(100_000);

    // await user.closeUser();
    // await funders[0].pausePool();
    // await funders[0].closePool();
  });
});

async function wait(seconds) {
  while (seconds > 0) {
    console.log("countdown " + seconds--);
    await new Promise((a) => setTimeout(a, 1000));
  }
  console.log("wait over");
}
