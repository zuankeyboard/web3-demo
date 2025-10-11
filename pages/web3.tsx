import { createConfig, http, useReadContract, useWriteContract } from "wagmi";
import { mainnet, sepolia, polygon, hardhat } from "wagmi/chains";
import { WagmiWeb3ConfigProvider, MetaMask, Sepolia, WalletConnect, Polygon, Hardhat } from '@ant-design/web3-wagmi';
import { Address, NFTCard, Connector, ConnectButton, useAccount, useProvider } from "@ant-design/web3";
import { injected, walletConnect } from "wagmi/connectors";
import { Button, message } from "antd";
import { parseEther } from "viem";

const config = createConfig({
    chains: [mainnet, sepolia, polygon, hardhat],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [polygon.id]: http(),
        [hardhat.id]: http("http://127.0.0.1:8545/"),
    },
    connectors: [
        injected({
            target: "metaMask",
        }),
        walletConnect({
            projectId: 'c07c0051c2055890eade3556618e38a6',
            showQrModal: false,
        }),
    ],
});

const contractInfo = [
    {
        id: 1,
        name: "Ethereum",
        contractAddress: "0x0CA8B7d78780408893A1028DD0BE72Fdc57c0024"
    }, {
        id: 5,
        name: "Sepolia",
        contractAddress: "0x0CA8B7d78780408893A1028DD0BE72Fdc57c0024"
    }, {
        id: 137,
        name: "Polygon",
        contractAddress: "0x0CA8B7d78780408893A1028DD0BE72Fdc57c0024"
    }, {
        // id: 31337,
        id: hardhat.id,
        name: "Hardhat",
        contractAddress: "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    }
]

const CallTest = () => {
    const { account } = useAccount();
    const { chain } = useProvider();
    const result = useReadContract({
        abi: [
            {
                type: 'function',
                name: 'balanceOf',
                stateMutability: 'view',
                inputs: [{ name: 'account', type: 'address' }],
                outputs: [{ type: 'uint256' }],
            },
        ],
        address: contractInfo.find((item) => item.id === chain?.id)?.contractAddress as `0x${string}`,
        functionName: 'balanceOf',
        args: [account?.address as `0x${string}`],
    });

    const { writeContract } = useWriteContract();

    return (
        <div>
            {result.data?.toString()}
            <Button
                onClick={() => {
                    writeContract(
                        {
                            abi: [
                                {
                                    type: "function",
                                    name: "mint",
                                    stateMutability: "payable",
                                    inputs: [
                                        {
                                            internalType: "uint256",
                                            name: "quantity",
                                            type: "uint256",
                                        },
                                    ],
                                    outputs: [],
                                },
                            ],
                            address: contractInfo.find((item) => item.id === chain?.id)?.contractAddress as `0x${string}`,
                            functionName: "mint",
                            args: [BigInt(1)],
                            value: parseEther("0.01"),
                        },
                        {
                            onSuccess: () => {
                                message.success("Mint Success");
                            },
                            onError: (err) => {
                                message.error(err.message);
                            },
                        }
                    );
                }}
            >
                mint
            </Button>
        </div >
    );
}

export default function Web3() {
    return (
        <WagmiWeb3ConfigProvider
            config={config}
            chains={[Sepolia, Polygon, Hardhat]}
            wallets={[MetaMask(), WalletConnect()]}
            eip6963={{
                autoAddInjectedWallets: true,
            }}
        >
            <Address format address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9" />
            <NFTCard
                address="0xEcd0D12E21805803f70de03B72B1C162dB0898d9"
                tokenId={641}
            />
            <Connector>
                <ConnectButton />
            </Connector>
            <CallTest />
        </WagmiWeb3ConfigProvider>
    );
}