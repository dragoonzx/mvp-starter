import {
  fetchSigner,
  getAccount,
  prepareWriteContract,
  SendTransactionResult,
  writeContract,
  readContract,
} from '@wagmi/core';

export const writeExample = async () => {
  /** Example of write with wagmi */
  // const signer = await fetchSigner();
  // if (!signer) {
  //   console.error('no signer provided');
  //   return Promise.reject('No signer provided');
  // }
  // const address = await signer.getAddress();
  // const config = await prepareWriteContract({
  //   address: exampleAddress,
  //   abi: exampleAbi,
  //   functionName: 'transfer',
  //   args: [amount],
  //   signer,
  // });
  // const data = await writeContract(config);
  // const res = await data.wait();
  // return res;
};
