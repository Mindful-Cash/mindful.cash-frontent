/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractFactory, Signer} from "ethers";
import {Provider} from "ethers/providers";
import {UnsignedTransaction} from "ethers/utils/transaction";

import {TransactionOverrides} from ".";
import {OwnableStorage} from "./OwnableStorage";

export class OwnableStorageFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<OwnableStorage> {
    return super.deploy(overrides) as Promise<OwnableStorage>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): OwnableStorage {
    return super.attach(address) as OwnableStorage;
  }
  connect(signer: Signer): OwnableStorageFactory {
    return super.connect(signer) as OwnableStorageFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnableStorage {
    return new Contract(address, _abi, signerOrProvider) as OwnableStorage;
  }
}

const _abi = [
  {
    inputs: [],
    name: "oSlot",
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
  "0x60b6610024600b82828239805160001a607314601757fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063f0907843146038575b600080fd5b603e6050565b60408051918252519081900360200190f35b604080517727bbb730b136329739ba37b930b3b2973637b1b0ba34b7b760411b815290519081900360180190208156fea2646970667358221220710ee6d573d726000b6215c35c261375e77bb279b54ca42a756ada87223b110664736f6c63430006040033";