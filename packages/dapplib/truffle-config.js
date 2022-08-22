require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth muscle collect hunt dry flock ghost'; 
let testAccounts = [
"0xf63832722b2129b5a8376f121e8c1b8d5dca7c6d46b312906217b353c8fc6bfe",
"0x6e46b3f8f4e14ad654d518521f7b6daf1e8df84ddabf8d7052c42c144209fc73",
"0x65b22998cf2f693aa53791a23a39e9170704d3847477a903b5d017496125fb57",
"0x5b3cb98cb5d3e896286f03f550b574afb5cf1455d5ff331bcc548eb67c5d79eb",
"0x507a7f12e62ab21e6f1de23e257042379fda462e15c608e3561c401822012355",
"0x74d50824a27f0deca5dac147c5d2be216b275c6349a1533254e590d86b5faca4",
"0x3357ac28d1da0e00846297353443959813b9cbeba8bb98adc14f6cc26702c1a1",
"0x3f4bae9f49181838e0a501d5f970a9d914629517b888cdd12f92b989dc8793f2",
"0xe4b701c2d1bf84d045d5ddf4b5dcbf1f1968b0a683309a2d077c1e4d84d2c031",
"0xf1f1516d422fbc7a08d5eceba6a00ba10bb8f71a386cc7ec42d238398065c1f6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


