'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const embed_1 = require('./embed');
exports.embed = embed_1.p2data;
const p2air_1 = require('./p2air');
exports.p2air = p2air_1.p2air;
const p2ar_1 = require('./p2ar');
exports.p2ar = p2ar_1.p2ar;
const p2ms_1 = require('./p2ms');
exports.p2ms = p2ms_1.p2ms;
const p2pk_1 = require('./p2pk');
exports.p2pk = p2pk_1.p2pk;
const p2pkh_1 = require('./p2pkh');
exports.p2pkh = p2pkh_1.p2pkh;
const p2sh_1 = require('./p2sh');
exports.p2sh = p2sh_1.p2sh;
const p2wpkh_1 = require('./p2wpkh');
exports.p2wpkh = p2wpkh_1.p2wpkh;
const p2wsh_1 = require('./p2wsh');
exports.p2wsh = p2wsh_1.p2wsh;
var VaultTxType;
(function(VaultTxType) {
  VaultTxType[(VaultTxType['Alert'] = 0)] = 'Alert';
  VaultTxType[(VaultTxType['Instant'] = 1)] = 'Instant';
  VaultTxType[(VaultTxType['Recovery'] = 2)] = 'Recovery';
  VaultTxType[(VaultTxType['NonVault'] = 3)] = 'NonVault';
})((VaultTxType = exports.VaultTxType || (exports.VaultTxType = {})));
// TODO
// witness commitment
