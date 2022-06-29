export type SolviewStaking = {
  "version": "0.1.0",
  "name": "solview_staking",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "poolNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createUser",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "stake",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakeFromAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "stakingType",
          "type": "u64"
        }
      ]
    },
    {
      "name": "unstake",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakeFromAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "sptAmount",
          "type": "u64"
        },
        {
          "name": "stakingType",
          "type": "u64"
        }
      ]
    },
    {
      "name": "authorizeFunder",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "funderToAdd",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "deauthorizeFunder",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "funderToRemove",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "fundStaking",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "funder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "funder",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rewardAAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "stakingType",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "paused",
            "type": "bool"
          },
          {
            "name": "stakingMint",
            "type": "publicKey"
          },
          {
            "name": "stakingVault",
            "type": "publicKey"
          },
          {
            "name": "userStakeCount",
            "type": "u32"
          },
          {
            "name": "funders",
            "type": {
              "array": [
                "publicKey",
                5
              ]
            }
          },
          {
            "name": "adminRewardAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "user",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "rewardA",
            "type": "u64"
          },
          {
            "name": "rewardB",
            "type": "u64"
          },
          {
            "name": "rewardC",
            "type": "u64"
          },
          {
            "name": "rewardARate",
            "type": "u64"
          },
          {
            "name": "rewardBRate",
            "type": "u64"
          },
          {
            "name": "rewardCRate",
            "type": "u64"
          },
          {
            "name": "balanceStakedA",
            "type": "u64"
          },
          {
            "name": "balanceStakedB",
            "type": "u64"
          },
          {
            "name": "balanceStakedC",
            "type": "u64"
          },
          {
            "name": "lastUpdateTimeA",
            "type": "u64"
          },
          {
            "name": "lastUpdateTimeB",
            "type": "u64"
          },
          {
            "name": "lastUpdateTimeC",
            "type": "u64"
          },
          {
            "name": "stakeTimeA",
            "type": "u64"
          },
          {
            "name": "stakeTimeB",
            "type": "u64"
          },
          {
            "name": "stakeTimeC",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "stakingType",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InsufficientFundUnstake",
      "msg": "Insufficient funds to unstake."
    },
    {
      "code": 6001,
      "name": "AmountMustBeGreaterThanZero",
      "msg": "Amount must be greater than zero."
    },
    {
      "code": 6002,
      "name": "SingleStakeTokenBCannotBeFunded",
      "msg": "Reward B cannot be funded - pool is single stake."
    },
    {
      "code": 6003,
      "name": "PoolPaused",
      "msg": "Pool is paused."
    },
    {
      "code": 6004,
      "name": "DurationTooShort",
      "msg": "Duration cannot be shorter than one day."
    },
    {
      "code": 6005,
      "name": "FunderAlreadyAuthorized",
      "msg": "Provided funder is already authorized to fund."
    },
    {
      "code": 6006,
      "name": "MaxFunders",
      "msg": "Maximum funders already authorized."
    },
    {
      "code": 6007,
      "name": "CannotDeauthorizePoolAuthority",
      "msg": "Cannot deauthorize the primary pool authority."
    },
    {
      "code": 6008,
      "name": "CannotDeauthorizeMissingAuthority",
      "msg": "Authority not found for deauthorization."
    },
    {
      "code": 6009,
      "name": "NotEnoughUnstakePeriod",
      "msg": "Can unstake only after 30 days more."
    }
  ]
};

export const IDL: SolviewStaking = {
  "version": "0.1.0",
  "name": "solview_staking",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "poolNonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createUser",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u8"
        }
      ]
    },
    {
      "name": "stake",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakeFromAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "stakingType",
          "type": "u64"
        }
      ]
    },
    {
      "name": "unstake",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakeFromAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "sptAmount",
          "type": "u64"
        },
        {
          "name": "stakingType",
          "type": "u64"
        }
      ]
    },
    {
      "name": "authorizeFunder",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "funderToAdd",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "deauthorizeFunder",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "funderToRemove",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "fundStaking",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "funder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "funder",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "from",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "rewardAAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "poolSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "stakingType",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "paused",
            "type": "bool"
          },
          {
            "name": "stakingMint",
            "type": "publicKey"
          },
          {
            "name": "stakingVault",
            "type": "publicKey"
          },
          {
            "name": "userStakeCount",
            "type": "u32"
          },
          {
            "name": "funders",
            "type": {
              "array": [
                "publicKey",
                5
              ]
            }
          },
          {
            "name": "adminRewardAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "user",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "rewardA",
            "type": "u64"
          },
          {
            "name": "rewardB",
            "type": "u64"
          },
          {
            "name": "rewardC",
            "type": "u64"
          },
          {
            "name": "rewardARate",
            "type": "u64"
          },
          {
            "name": "rewardBRate",
            "type": "u64"
          },
          {
            "name": "rewardCRate",
            "type": "u64"
          },
          {
            "name": "balanceStakedA",
            "type": "u64"
          },
          {
            "name": "balanceStakedB",
            "type": "u64"
          },
          {
            "name": "balanceStakedC",
            "type": "u64"
          },
          {
            "name": "lastUpdateTimeA",
            "type": "u64"
          },
          {
            "name": "lastUpdateTimeB",
            "type": "u64"
          },
          {
            "name": "lastUpdateTimeC",
            "type": "u64"
          },
          {
            "name": "stakeTimeA",
            "type": "u64"
          },
          {
            "name": "stakeTimeB",
            "type": "u64"
          },
          {
            "name": "stakeTimeC",
            "type": "u64"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "stakingType",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InsufficientFundUnstake",
      "msg": "Insufficient funds to unstake."
    },
    {
      "code": 6001,
      "name": "AmountMustBeGreaterThanZero",
      "msg": "Amount must be greater than zero."
    },
    {
      "code": 6002,
      "name": "SingleStakeTokenBCannotBeFunded",
      "msg": "Reward B cannot be funded - pool is single stake."
    },
    {
      "code": 6003,
      "name": "PoolPaused",
      "msg": "Pool is paused."
    },
    {
      "code": 6004,
      "name": "DurationTooShort",
      "msg": "Duration cannot be shorter than one day."
    },
    {
      "code": 6005,
      "name": "FunderAlreadyAuthorized",
      "msg": "Provided funder is already authorized to fund."
    },
    {
      "code": 6006,
      "name": "MaxFunders",
      "msg": "Maximum funders already authorized."
    },
    {
      "code": 6007,
      "name": "CannotDeauthorizePoolAuthority",
      "msg": "Cannot deauthorize the primary pool authority."
    },
    {
      "code": 6008,
      "name": "CannotDeauthorizeMissingAuthority",
      "msg": "Authority not found for deauthorization."
    },
    {
      "code": 6009,
      "name": "NotEnoughUnstakePeriod",
      "msg": "Can unstake only after 30 days more."
    }
  ]
};
