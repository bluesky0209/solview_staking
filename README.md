## Getting start with installation of Anchor

### Installing Rust
`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
rustup component add rustfmt`

### Installing solana
`sh -c "$(curl -sSfL https://release.solana.com/v1.8.0/install)"`

### Installing mocha
`npm install -g mocha`

### Installing anchor
#### Install using pre-build binary on x86_64 Linux
`npm i -g @project-serum/anchor-cli`

#### Build from source for other operating systems
`cargo install --git https://github.com/project-serum/anchor --tag v0.18.0 anchor-cli --locked`

`npm install -g @project-serum/anchor`

## INSTALL
### running solana local validator
`cd /home`

`solana-test-validator`

### deploy program to local validator
`cd /path/to/your work directory/xhashtag-staking`

`npm i`

`anchor build`

`anchor deploy`

`cd ..`

`cd xhashtag-staking-backend`

If you already run below commands in this directory, ignore this.

`npm i`

`npm run pool`
