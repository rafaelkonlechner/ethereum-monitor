var app = new Vue({
    el: '#app',
    data: {
        blockNumber: 0,
        block: {},
        transactionHash: '',
        transaction: {},
        address: '',
        balance: 0,
        croBalance: 0,
    },
    mounted: function() {
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        this.getBlock()
    },
    watch: {
        blockNumber: function(newBlockNumber) {
            if (newBlockNumber >= 0) {
                this.getBlock()
            }
        },
        transactionHash: function(newTransactionHash) {
            if (newTransactionHash !== '') {
                this.getTransaction()
            }
        },
        address: function(newAddress) {
            if (newAddress !== '') {
                this.getBalance()
            }
        }
    },
    methods: {
        getBlock: function() {
            var self = this;
            web3.eth.getBlock(this.blockNumber, function(error, result) {
                if (!error) {
                    self.block = result
                } else {
                    console.error(error);
                }
            })
        },
        getTransaction: function() {
            var self = this;
            web3.eth.getTransaction(this.transactionHash, function(error, result) {
                if (!error) {
                    self.transaction = result
                } else {
                    console.error(error);
                }
            })
        },
        getBalance: function() {
            var balance = web3.eth.getBalance(this.address);
            this.balance = web3.fromWei(balance, "ether").toNumber();
        }
    }
});
