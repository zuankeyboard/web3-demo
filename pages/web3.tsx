import { http } from "wagmi";
import { Mainnet, WagmiWeb3ConfigProvider, MetaMask } from '@ant-design/web3-wagmi';
import { Address, NFTCard, Connector, ConnectButton } from "@ant-design/web3";

export default function Web3() {
    return (
        <WagmiWeb3ConfigProvider
            chains={[Mainnet]}
            transports={{
                [Mainnet.id]: http('https://api.zan.top/node/v1/eth/mainnet/2b7e8989fa1841e99d44b9a9bd6a37b8'),
            }}
            wallets={[MetaMask()]}
        >
            <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
            <NFTCard
                address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9"
                tokenId={641}
            />
            <Connector>
                <ConnectButton />
            </Connector>
        </WagmiWeb3ConfigProvider>
    );
}