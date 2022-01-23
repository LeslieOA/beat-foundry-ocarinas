require("dotenv").config()

const fs  = require("fs")
const { ethers } = require("ethers")

const provider = new ethers.providers.FallbackProvider([
	new ethers.providers.EtherscanProvider(
		"homestead",
		process.env.ETHERSCAN_API_KEY
	)
])


let tokenId = 0
const midiFolder = './songs/'

/**
 * Beat Foundry Ocarinas Contract
 */
const ocarinasAddress = "0xa5372Ee48516F8bA07AAcA07E57445D8401A2fe9";
const ocarinasAbi = [
  "function name() view returns (string)",
	"function tokenURI(uint256 tokenId) external view returns (string memory)"
];
const ocarinasContract = new ethers.Contract(
	ocarinasAddress, ocarinasAbi, provider
)


const getContractName = async() => {
	return await ocarinasContract.name()
}
const getContractTokenURI = async(tokenId) => {
	return await ocarinasContract.tokenURI(tokenId)
}


getContractName().then(data => {
	console.log("Contract Name:", data)
})

function getOcarinas() {
	try {
		getContractTokenURI(tokenId)
			.then(data => {
				const dataType = data.split(',')[0]
				const metaData = JSON.parse((new Buffer.from(data.split(',')[1], 'base64')).toString('ascii'))
				const { name, description, image, animation_url, audio } = metaData

				const midiFileBuffer = new Buffer.from(audio.split(',')[1], 'base64')

				if (!fs.existsSync(midiFolder)) fs.mkdirSync(midiFolder)

				console.log(`Downloading: ${midiFolder}${name}.mid`)
				fs.writeFileSync(`${midiFolder}${name}.mid`, midiFileBuffer)

			})
			.then(() => {
				tokenId++
				getOcarinas()
			})
	} catch (err) {
		console.log("Out of Ocarina's", err)
		return
	}
}
getOcarinas()


