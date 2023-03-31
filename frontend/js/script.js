// Add a variable to keep track of the number of NFTs that have been minted
let mintedCount = 0;

// Update the minted count whenever a new NFT is minted
async function mintNFT() {
  // Get the selected account from MetaMask
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];

  // Get the number of NFTs that have been minted
  const totalMinted = await contract.methods.totalSupply().call();

  // Check if the maximum number of NFTs have already been minted
  if (totalMinted >= MAX_NFT_SUPPLY) {
    alert("All NFTs have been minted!");
    return;
  }

  // Get the number of NFTs that the user wants to mint
  const quantity = parseInt(document.getElementById("mintInput").value);

  // Check if the user is trying to mint more than the maximum allowed per transaction
  if (quantity > MAX_NFTS_PER_TX) {
    alert(`You can only mint ${MAX_NFTS_PER_TX} NFTs at a time!`);
    return;
  }

  // Calculate the total price based on the quantity of NFTs
  const totalPrice = quantity * PRICE_PER_NFT;

  // Check if the user has enough ETH to purchase the NFTs
  const balance = await web3.eth.getBalance(account);
  if (balance < totalPrice) {
    alert("Insufficient balance!");
    return;
  }

  // Mint the NFTs
  const transaction = await contract.methods
    .mintNFT(quantity)
    .send({ from: account, value: totalPrice });

  // Update the minted count
  mintedCount += quantity;
  document.getElementById("mintedCount").textContent = mintedCount;

  // Show the minted container and hide the mint container
  document.getElementById("mintContainer").classList.add("hidden");
  document.getElementById("mintedContainer").classList.remove("hidden");

  // Show the transaction link and the link to the collection
  const txnLink = `https://goerli.etherscan.io/tx/${transaction.transactionHash}`;
  document.getElementById("mintedTxnBtn").href = txnLink;
}
