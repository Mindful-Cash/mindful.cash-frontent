/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractFactory, Signer} from "ethers";
import {Provider} from "ethers/providers";
import {UnsignedTransaction} from "ethers/utils/transaction";

import {TransactionOverrides} from ".";
import {PcTokenStorage} from "./PcTokenStorage";

export class PcTokenStorageFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<PcTokenStorage> {
    return super.deploy(overrides) as Promise<PcTokenStorage>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): PcTokenStorage {
    return super.attach(address) as PcTokenStorage;
  }
  connect(signer: Signer): PcTokenStorageFactory {
    return super.connect(signer) as PcTokenStorageFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PcTokenStorage {
    return new Contract(address, _abi, signerOrProvider) as PcTokenStorage;
  }
}

const _abi = [
  {
    inputs: [],
    name: "ptSlot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x60b6610024600b82828239805160001a607314601757fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063ec565ffe146038575b600080fd5b603e6050565b60408051918252519081900360200190f35b60408051772821aa37b5b2b71739ba37b930b3b2973637b1b0ba34b7b760411b815290519081900360180190208156fea2646970667358221220b13a3a23cefa4acf708378077bc659707e8a4c4a2c1243618a7b52609a624c4364736f6c63430006040033";