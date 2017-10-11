geth --identity "TestNetNode" --nodiscover --networkid 1999 --datadir testnet/ init Genesis.json
geth account new --datadir testnet/
geth removedb --datadir testnet/
# change alloc-address in Genesis.json
geth --identity "TestNetNode" --nodiscover --networkid 1999 --datadir testnet/ init Genesis.json

