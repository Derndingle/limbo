/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface LiquidityReceiverInterface extends ethers.utils.Interface {
  functions: {
    "config()": FunctionFragment;
    "drain(address)": FunctionFragment;
    "getPyroToken(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "registerPyroToken(address,string,string)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setFeeExemptionStatusOnPyroForContract(address,address,uint8)": FunctionFragment;
    "setLachesis(address)": FunctionFragment;
    "setPyroTokenLoanOfficer(address,address)": FunctionFragment;
    "setSnufferCap(address)": FunctionFragment;
    "togglePyroTokenPullFeeRevenue(address,bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferPyroTokenToNewReceiver(address,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "config", values?: undefined): string;
  encodeFunctionData(functionFragment: "drain", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getPyroToken",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerPyroToken",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeExemptionStatusOnPyroForContract",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setLachesis", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setPyroTokenLoanOfficer",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSnufferCap",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "togglePyroTokenPullFeeRevenue",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferPyroTokenToNewReceiver",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "drain", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPyroToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerPyroToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeExemptionStatusOnPyroForContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLachesis",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPyroTokenLoanOfficer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSnufferCap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "togglePyroTokenPullFeeRevenue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferPyroTokenToNewReceiver",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class LiquidityReceiver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: LiquidityReceiverInterface;

  functions: {
    config(
      overrides?: CallOverrides
    ): Promise<[string, string] & { lachesis: string; snufferCap: string }>;

    drain(
      baseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPyroToken(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    registerPyroToken(
      baseToken: string,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeExemptionStatusOnPyroForContract(
      pyroToken: string,
      target: string,
      exemption: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLachesis(
      _lachesis: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPyroTokenLoanOfficer(
      pyroToken: string,
      loanOfficer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSnufferCap(
      snufferCap: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    togglePyroTokenPullFeeRevenue(
      pyroToken: string,
      pull: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferPyroTokenToNewReceiver(
      pyroToken: string,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  config(
    overrides?: CallOverrides
  ): Promise<[string, string] & { lachesis: string; snufferCap: string }>;

  drain(
    baseToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPyroToken(baseToken: string, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  registerPyroToken(
    baseToken: string,
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeExemptionStatusOnPyroForContract(
    pyroToken: string,
    target: string,
    exemption: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLachesis(
    _lachesis: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPyroTokenLoanOfficer(
    pyroToken: string,
    loanOfficer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSnufferCap(
    snufferCap: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  togglePyroTokenPullFeeRevenue(
    pyroToken: string,
    pull: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferPyroTokenToNewReceiver(
    pyroToken: string,
    receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    config(
      overrides?: CallOverrides
    ): Promise<[string, string] & { lachesis: string; snufferCap: string }>;

    drain(baseToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPyroToken(baseToken: string, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    registerPyroToken(
      baseToken: string,
      name: string,
      symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFeeExemptionStatusOnPyroForContract(
      pyroToken: string,
      target: string,
      exemption: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setLachesis(_lachesis: string, overrides?: CallOverrides): Promise<void>;

    setPyroTokenLoanOfficer(
      pyroToken: string,
      loanOfficer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setSnufferCap(snufferCap: string, overrides?: CallOverrides): Promise<void>;

    togglePyroTokenPullFeeRevenue(
      pyroToken: string,
      pull: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferPyroTokenToNewReceiver(
      pyroToken: string,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    config(overrides?: CallOverrides): Promise<BigNumber>;

    drain(
      baseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPyroToken(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    registerPyroToken(
      baseToken: string,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeExemptionStatusOnPyroForContract(
      pyroToken: string,
      target: string,
      exemption: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLachesis(
      _lachesis: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPyroTokenLoanOfficer(
      pyroToken: string,
      loanOfficer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSnufferCap(
      snufferCap: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    togglePyroTokenPullFeeRevenue(
      pyroToken: string,
      pull: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferPyroTokenToNewReceiver(
      pyroToken: string,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    config(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    drain(
      baseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPyroToken(
      baseToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerPyroToken(
      baseToken: string,
      name: string,
      symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeExemptionStatusOnPyroForContract(
      pyroToken: string,
      target: string,
      exemption: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLachesis(
      _lachesis: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPyroTokenLoanOfficer(
      pyroToken: string,
      loanOfficer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSnufferCap(
      snufferCap: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    togglePyroTokenPullFeeRevenue(
      pyroToken: string,
      pull: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferPyroTokenToNewReceiver(
      pyroToken: string,
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}