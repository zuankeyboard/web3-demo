import React from "react";
import Header from "./Header";
import styles from "./styles.module.css";
import {
    MetaMask,
    OkxWallet,
    TokenPocket,
    WagmiWeb3ConfigProvider,
    WalletConnect,
    Hardhat,
    Sepolia,
} from "@ant-design/web3-wagmi";

interface KKLayoutProps {
    children: React.ReactNode;
}

const KKLayout: React.FC<KKLayoutProps> = ({ children }) => {
    return (
        <WagmiWeb3ConfigProvider
            eip6963={{
                autoAddInjectedWallets: true,
            }}
            ens
            chains={[Sepolia, Hardhat]}
            transports={{
                [Hardhat.id]: http("http://127.0.0.1:8545"),
                [Sepolia.id]: http("https://api.zan.top/public/eth-sepolia"),
            }}
            wallets={[
                MetaMask(),
                WalletConnect(),
                TokenPocket({
                    group: "Popular",
                }),
                OkxWallet(),
            ]}
            walletConnect={{
                projectId: "c07c0051c2055890eade3556618e38a6",
            }}
        >
            <div className={styles.layout}>
                <Header />
                {children}
            </div>
        </WagmiWeb3ConfigProvider>
    );
};

export default KKLayout;