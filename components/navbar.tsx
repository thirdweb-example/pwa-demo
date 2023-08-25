import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const address = useAddress();
    return (
        <div className={styles.navbar}>
            <Link href="/" className={styles.navIcon}>
                <Image src={"/claim-icon.png"} alt="" width={46} height={46}/>
                <p className={styles.navIconLabel}>Claim</p>
            </Link>
            <Link href="/nfts" className={styles.navIcon}>
                <Image src={"/nft-icon.png"} alt="" width={40} height={40}/>
                <p className={styles.navIconLabel}>NFTs</p>
            </Link>
            <div className={styles.navIcon}>
            {address && (
                <ConnectWallet
                    btnTitle="Login"
                    detailsBtn={() => {
                        return (
                            <div>
                                <Image src={"/profile-icon.png"} alt="" width={40} height={40}/>
                                <p className={styles.navIconLabel}>Profile</p>
                            </div>
                        )
                    }}
                />
            )}
            </div>
        </div>
    )
}