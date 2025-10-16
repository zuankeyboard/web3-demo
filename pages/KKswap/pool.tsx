import KKLayout from "@/components/KKLayout";
import Link from "next/link";

export default function KKswapPool() {
    return (
        <KKLayout>
            KKswapPool <Link href="/KKswap/positions">My Positions</Link>
        </KKLayout>
    );
}