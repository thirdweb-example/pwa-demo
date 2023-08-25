import {
  ConnectWallet,
  MediaRenderer,
  Web3Button,
  useAddress,
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react";
import { NFT_CONTRACT_ADDRESS } from "../consts/addresses";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  const address = useAddress();

  const { contract } = useContract(NFT_CONTRACT_ADDRESS);

  const { data: contractMetadata } = useContractMetadata(contract);

  return (
    <div className={styles.container}>
      {address ? (
        <div className={styles.nftClaim}>
          <MediaRenderer
            src={contractMetadata?.image}
            width="auto"
            height="60%"
            style={{
              borderRadius: "20px",
              maxWidth: "500px",
            }}
          />
          <h1>{contractMetadata?.name}</h1>
          <Web3Button
            contractAddress={NFT_CONTRACT_ADDRESS}
            action={(contract) => contract.erc1155.claim(0, 1)}
            onSuccess={() => alert("NFT Claimed!")}
          >
            Claim NFT
          </Web3Button>
        </div>
      ) : (
        <div className={styles.loginContainer}>
          <ConnectWallet btnTitle="Login" />
        </div>
      )}
    </div>
  );
};

export default Home;
