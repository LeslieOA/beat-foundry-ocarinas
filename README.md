# Ocarina Explorer
> Download Beat Foundry's Ocarina's to play locally


## What?

[Beat Foundry](https://beatfoundry.xyz/) have a series of 1500 on-chain beats that were all minted on the 22nd January 2022.
This simple script interacts with their Ocarina contract to download the onchain meta data, parse the base64 encoded Midi files (beats) and download them for local listening.

## Why?

Because NFT project assets are usually stored off-chain on IPFS (which is highly accessible). Accessing data in a smart contract: much less so (at least for now). 


## Run

* Get a free API key from Etherscan: https://info.etherscan.com/etherscan-developer-api-key/ 
* Copy `.env.example` to `.env`
* Add your new Etherscan API key as the value of `ETHERSCAN_API_KEY`
*4.* `npm i`
* `npm start`



...then: wait. `./songs/` folder will start populating.




## License

[GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.en.html).  
All song's on-chain are owned by Beat Foundry and each respective Ocarina's wallet holder. 😌 