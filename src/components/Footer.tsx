import Image from "./Image";
import Text from "./Text";

const Footer = () => {
  const subtitles = (titles: string[]) => {
    return (
      <>
        {titles?.map((item) => {
          return (
            <div style={{ marginTop: "8px" }}>
              <Text text={item} type="Footer-subtitle" />
            </div>
          );
        })}
      </>
    );
  };
  const community = ["Forums", "Discord"];
  const validators = [
    "Delegation program",
    "Stake-o-Matic",
    "Validators.app",
    "Solana Beach",
    "FAQ",
  ];
  const resources = ["Network Careers", "Network Explorer", "Terms of Service"];

  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        height: "350px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "46px",
          width: "1010px",
        }}
      >
        <div>
          <Image
            src="https://solana.org/_next/static/media/solana_foundation_logo_dark_full.2bf56950.svg"
            alt="Example image"
            variation={{ width: "159px", height: "28px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "900px",
            justifyContent: "space-around",
            marginLeft: "121px",
          }}
        >
          <div>
            <Text text="Community" type="Footer-title" />
            {subtitles(community)}
          </div>
          <div>
            <Text text="Validators" type="Footer-title" />
            {subtitles(validators)}
          </div>
          <div>
            <Text text="Resources" type="Footer-title" />
            {subtitles(resources)}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          height: "100px",
          marginLeft: "572px",
        }}
      >
        <Text text="THE SOLANA FOUNDATION" type="bottom-text" />
      </div>
    </footer>
  );
};

export default Footer;
