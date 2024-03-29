class Payments {
    constructor () { }

    contractABI () {
        return [{
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            stateMutability: "payable",
            type: "fallback"
        }, {
            inputs: [{
                internalType: "address",
                name: "_tokenTRC20",
                type: "address"
            }],
            name: "ChangeTokenPrincipal",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "MIN_RETIRO",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "PRECIO_BLOCK",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "PRECIO_BLOCK_infinity",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "bool[]",
                name: "old",
                type: "bool[]"
            }],
            name: "actualizarArrayBool",
            outputs: [{
                internalType: "bool[]",
                name: "",
                type: "bool[]"
            }],
            stateMutability: "pure",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256[]",
                name: "old",
                type: "uint256[]"
            }],
            name: "actualizarArrayUint256",
            outputs: [{
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }],
            stateMutability: "pure",
            type: "function"
        }, {
            inputs: [{
                internalType: "address[]",
                name: "oldNetwork",
                type: "address[]"
            }],
            name: "actualizarNetwork",
            outputs: [{
                internalType: "address[]",
                name: "",
                type: "address[]"
            }],
            stateMutability: "pure",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "adInfinity",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "adRoi",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }, {
                internalType: "bool",
                name: "_sumar",
                type: "bool"
            }, {
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }],
            name: "addInfinity",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }, {
                internalType: "bool",
                name: "_sumar",
                type: "bool"
            }, {
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }],
            name: "addReferal",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }, {
                internalType: "bool",
                name: "_sumar",
                type: "bool"
            }, {
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }],
            name: "addRoi",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "addressToId",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "admin",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "admin2",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address[]",
                name: "network",
                type: "address[]"
            }],
            name: "allnetwork",
            outputs: [{
                internalType: "address[]",
                name: "",
                type: "address[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }],
            name: "asignarBlokePago",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "_infinit",
                type: "bool"
            }],
            name: "asignarBlokePago2",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }, {
                internalType: "address",
                name: "_sponsor",
                type: "address"
            }],
            name: "asignarMembership",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "baserange",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "baserangelength",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "blockesRango",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "blokes",
            outputs: [{
                internalType: "uint256",
                name: "inicio",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }],
            name: "buyBlocks",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }],
            name: "buyInfinityBlock",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "yo",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_largo",
                type: "uint256"
            }],
            name: "column",
            outputs: [{
                internalType: "address[]",
                name: "",
                type: "address[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "yo",
                type: "address"
            }],
            name: "columnHijos",
            outputs: [{
                internalType: "address[]",
                name: "",
                type: "address[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "bool",
                name: "_true_false",
                type: "bool"
            }],
            name: "controlWitdrawl",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }, {
                internalType: "bool",
                name: "_infinity",
                type: "bool"
            }],
            name: "depositos",
            outputs: [{
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }, {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }, {
                internalType: "bool[]",
                name: "",
                type: "bool[]"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "descuento",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "dias",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "duracionMembership",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "gananciasRango",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "hijo",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "idToAddress",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "implementation",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }, {
                internalType: "address",
                name: "_sponsor",
                type: "address"
            }],
            name: "inMigracion",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "infinity",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "infinityBlokes",
            outputs: [{
                internalType: "uint256",
                name: "inicio",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "investors",
            outputs: [{
                internalType: "bool",
                name: "registered",
                type: "bool"
            }, {
                internalType: "uint256",
                name: "membership",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "balanceRef",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "balanceInfinit",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "totalRef",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "invested",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "paidAt",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "paidAt2",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "withdrawn",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "directos",
                type: "uint256"
            }, {
                internalType: "string",
                name: "data",
                type: "string"
            }, {
                internalType: "uint256",
                name: "blokesDirectos",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "lastUserId",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address payable",
                name: "_newadmin",
                type: "address"
            }],
            name: "makeNewAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address payable",
                name: "_newadmin",
                type: "address"
            }],
            name: "makeNewAdmin2",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address payable",
                name: "_oldadmin",
                type: "address"
            }],
            name: "makeRemoveAdmin",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address payable",
                name: "_oldadmin",
                type: "address"
            }],
            name: "makeRemoveAdmin2",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "newRecompensa",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "oldBlokes",
            outputs: [{
                internalType: "uint256",
                name: "inicio",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "onOffWitdrawl",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address payable",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "padre",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "personas",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "porcent",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "porcientos",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "precioRegistro",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "primervez",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "puntosRango",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "rangoReclamado",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "redimBNB",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }],
            name: "redimTokenPrincipal02",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_sponsor",
                type: "address"
            }, {
                internalType: "string",
                name: "_datos",
                type: "string"
            }],
            name: "registro",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_contarct",
                type: "address"
            }],
            name: "setContratoMigracion",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_descuento",
                type: "uint256"
            }],
            name: "setDescuento",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_min",
                type: "uint256"
            }],
            name: "setMIN_RETIRO",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_nivel",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }],
            name: "setPorcientos",
            outputs: [{
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_nivel",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }],
            name: "setPorcientosSalida",
            outputs: [{
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_precio",
                type: "uint256"
            }],
            name: "setPrecioRegistro",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "_infinity",
                type: "bool"
            }],
            name: "setPriceBlock",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_nivel",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }],
            name: "setPrimeravezPorcientos",
            outputs: [{
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "bool[]",
                name: "_baserange",
                type: "bool[]"
            }, {
                internalType: "uint256[]",
                name: "_gananciasRango",
                type: "uint256[]"
            }, {
                internalType: "uint256[]",
                name: "_puntosRango",
                type: "uint256[]"
            }],
            name: "setRangos",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_porcentaje",
                type: "uint256"
            }],
            name: "setRetorno",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_dias",
                type: "uint256"
            }],
            name: "setTiempo",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_unidades",
                type: "uint256"
            }],
            name: "setTiempoUnidades",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address[]",
                name: "_wallet",
                type: "address[]"
            }, {
                internalType: "uint256[]",
                name: "_fee",
                type: "uint256[]"
            }],
            name: "setWalletFee",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address[]",
                name: "_wallets",
                type: "address[]"
            }, {
                internalType: "uint256[]",
                name: "_valores",
                type: "uint256[]"
            }],
            name: "setWalletstransfers",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_duracionMembership",
                type: "uint256"
            }],
            name: "setduracionMembership",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "tiempo",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "tokenPricipal",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalInvested",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalInvestors",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalRange",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalRangeWitdrawl",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalRefRewards",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalRefWitdrawl",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalRoiWitdrawl",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalTeamWitdrawl",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address payable",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "unidades",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "_add",
                type: "bool"
            }],
            name: "updateBloke",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_user",
                type: "address"
            }, {
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "_add",
                type: "bool"
            }],
            name: "updateBlokeRange",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_imp",
                type: "address"
            }],
            name: "upgradeImplementation",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "upgraded",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "usdtRetirado",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "valor",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "valorFee",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "version",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "wallet",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "walletFee",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "withdraw2",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "withdrawTeam",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "any_user",
                type: "address"
            }, {
                internalType: "bool",
                name: "_infinity",
                type: "bool"
            }],
            name: "withdrawable",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "any_user",
                type: "address"
            }],
            name: "withdrawableRange",
            outputs: [{
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            stateMutability: "payable",
            type: "receive"
        }];
    }

    contractAddress () {
        return '0x5d34b576F777BE6eaABe880b68EC1417E1C1c04F';
    }

    tokenAddress () {
        return '0x55d398326f99059fF775485246999027B3197955';
    }

    tokenABI () {
        return [
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "payable": true,
                "stateMutability": "payable",
                "type": "fallback"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            }
        ];
    }

}

export default Payments;