import Image from "./Image";
import Text from "./Text";
import { darkLogo } from "../Constants"; //715px
import styled from "styled-components";

const FooterTextSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-left: 121px;
  flex-wrap: wrap;

  @media (max-width: 715px) {
    all: inherit;
    flex-wrap: wrap;
    justify-content: unset;
    height: 510px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;

  @media (max-width: 457px) {
    all: inherit;
    flex-wrap: wrap;
  }
`;

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
        height: "auto",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <FooterSection>
          <div>
            <Image
              src={darkLogo}
              alt="Example image"
              variation={{ width: "159px", height: "28px" }}
            />
          </div>
          <FooterTextSection>
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
          </FooterTextSection>
        </FooterSection>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          height: "100px",
          justifyContent: "center",
        }}
      >
        <Text text="THE SOLANA FOUNDATION" type="bottom-text" />
      </div>
    </footer>
  );
};

export default Footer;
