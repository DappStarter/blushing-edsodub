require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remain prosper inflict kite bubble shine'; 
let testAccounts = [
"0x2313205380040b3826e8a0a036c4fddc42037fc56458d294426c9b17add8c17b",
"0x72f363315e4d9e1e140303ce1cbe9e45c11f48aaf43725ac189b08472facdc22",
"0xa56874457c3b23c5deea94db044809df8630fd04569ce9e7096c843752c52dce",
"0xfd54654ce850a52901f0a6550d5dce9aba0593a88d872818944f483c432af0ef",
"0xf3daf6f1f03f949a32cfafa1dd497cd5bd60b5c358ed56d12e16ad86170480b7",
"0xf572d3e066fb2f6384da4f85f2ad58ba62c267d03545eeefc3279688ba7d7c30",
"0xd59d57a89e66467eb09605d42194c831e26dc3d72077dc55305d9e426eed12cf",
"0x54e6d98941297568fede6dc42ed971cefc2a29a65d2237fc4ee3f169effa94d2",
"0xf44ff9dc27586787578688a4d4c0b7a8313ad20df28d597fb6ce5e6f9d0e259c",
"0x49dfc9e3ac24d5162a05430566e232448a507fc89d8aa60d0764467d12e0f347"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
