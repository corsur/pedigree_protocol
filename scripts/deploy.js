async function main() {
  const NFPedigree = await ethers.getContractFactory("NFPedigree")

  // Start deployment, returning a promise that resolves to a contract object
  const myNFPedigree = await NFPedigree.deploy()
  await myNFPedigree.deployed()
  console.log("Contract deployed to address:", myNFPedigree.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

