import CardComponent from "./CardComponent";

const CardsGrid = () => {
  return (
    <div style={{ marginLeft: "145px" }}>
      <div
        style={{
          maxWidth: "1060px",
          display: "flex",
        }}
      >
        <CardComponent
          variant={{
            title: "Stake Pools",
            subtitle:
              "Stake Pools are a liquid staking solution that promote censorship resistance, decentralization, and the growth of DeFi on Solana.",
            color: "#fff",
            text: "Learn about liquid stacked SOL",
            backgroundColor: "#44167e",
          }}
        />
        <CardComponent
          variant={{
            title: "Grants",
            subtitle:
              "The Solana Foundation Grants Program is focused on funding efforts to further censorship resistance on the Solana Network",
            color: "#fff",
            text: "Build for the common good",
            backgroundColor: "#bf2b06",
            marginLeft: "50px",
          }}
        />
      </div>
      <div
        style={{
          maxWidth: "1060px",
          display: "flex",
          marginTop: "50px",
        }}
      >
        <CardComponent
          variant={{
            title: "Server Program",
            subtitle:
              "Get access to servers at discounted prices with month to month contracts from our partners. An optional Foundation Program to help bootstrap the network.",
            color: "#fff",
            text: "Get your server",
            backgroundColor: "#9e277b",
          }}
        />
        <CardComponent
          variant={{
            title: "Delegation Program",
            subtitle:
              "Validators can participate in the Solana Foundation Delegation Program if they meet certain performance requirements. Foundation Delegation participants are eligible to receive a delegation from the Solana Foundation, helping decentralize the network.",
            color: "#fff",
            text: "What to expect",
            backgroundColor: "#44167e",
            marginLeft: "50px",
          }}
        />
      </div>
    </div>
  );
};

export default CardsGrid;
