import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@ant-design/web3";
import styles from "./styles.module.css";

export default function KKHeader() {
    const pathname = usePathname();
    const isSwapPage = pathname === "/KKswap";

    return (
        <div className={styles.header}>
            <div className={styles.title}>KKSwap</div>
            <div className={styles.nav}>
                <Link
                    href="/KKswap"
                    className={isSwapPage ? styles.active : undefined}
                >
                    Swap
                </Link>
                <Link
                    href="/KKswap/pool"
                    className={!isSwapPage ? styles.active : undefined}
                >
                    Pool
                </Link>
            </div >
            <div>
                <ConnectButton type="text" />
            </div>
        </div >
    );
}