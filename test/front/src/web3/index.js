import Web3 from 'web3'
import store from '../store'

const initWdb3 = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum)
    try {
      // Request account access if needed
      await window.ethereum.enable()
      // Acccounts now exposed
      web3.eth.getAccounts().then((accounts) => {
        // console.log(accounts[0]);
        // window.account = accounts[0];
        store.commit('accountSave', accounts[0])
        console.log(store.state.account)
        // this.$router.push({ path: "select" });
      })
    } catch (error) {
      console.log('error')
      alert('메타마스트 접속에 실패하였습니다. 다시 시도해 주세요')
    }
  }
  // Legacy dapp browsers...
  // else if (window.web3) {
  //     // Use Mist/MetaMask's provider.
  //     const web3 = window.web3;
  //     console.log("Injected web3 detected.");
  // }
}

export default initWdb3

// import Web3 from 'web3';

// const web3 = new Web3(window.ethereum);
// window.ethereum.enable();

// export default web3;
