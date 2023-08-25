import { ThirdwebNftMedia, useAddress, useContract } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/sdk";
import styles from "../styles/Home.module.css";
import { NFT_CONTRACT_ADDRESS } from "../consts/addresses";

type NFTProps = {
    nft: NFT;
    quantity: number;
};

export default function NFTCard({ nft, quantity }: NFTProps) {

    return (
        <div className={styles.nftCard}>
            <ThirdwebNftMedia
                metadata={nft.metadata}
                width="100%"
                height="auto"
            />
            <div className={styles.nftCardContent}>
                <p>{nft.metadata.name}</p>
                <p>QTY: {quantity}</p>
            </div>
        </div>
    )
};