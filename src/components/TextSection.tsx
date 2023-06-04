import Text from "./Text";
import VerticalLine from "./VerticalLine";
import styled from "styled-components";

const Censorship = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1217px) {
    all: inherit;
    height: 10%;
  }
`;

const TopLevel = styled.div`
  display: "flex",
  justifyContent: "center",
  width: "88%",
  height: "450px",
  @media (max-width: 1217px) {
    all: inherit;
    height: "1050px",
  }
`;

const Level2 = styled.div`
  display: flex;
  width: 75%;

  @media (max-width: 1217px) {
    all: inherit;
    flex-wrap: wrap;
  }
`;

const CensorshipPoints = styled.div`
  width: 40%;
  height: 35%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  padding: 4%;

  @media (max-width: 1217px) {
    all: inherit;
    height: 22vh;
  }
`;

const CensorshipSub1 = styled.div`
  width: 441px;
  overflow-y: hidden;

  @media (max-width: 1217px) {
    width: unset;
  }
`;

const Numbersection = styled.div`
  display: flex;
  width: 106%;
  justify-content: space-between;

  @media (max-width: 1211px) {
    width: 73%;
  }
`;

const TextSection = () => {
  return (
    <>
      <TopLevel>
        <Censorship>
          <Level2>
            <CensorshipPoints>
              <CensorshipSub1>
                <Text text="Censorship resistance, now." type="Title" />
              </CensorshipSub1>
              <Text
                text="The Solana Foundation is working to make the Solana protocol the most censorship resistant network in the world."
                type="Subtitle"
              />
            </CensorshipPoints>
            <div
              style={{
                padding: "3%",
                width: "69%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Numbersection>
                <Text text="1" type="Number" color="#bf2b06" />
                <VerticalLine height="100px" />
                <div style={{ maxWidth: "81%" }}>
                  <Text
                    text="On the permissionless Solana network, anyone can participate in helping to secure the network as a validator. The Solana Foundation encourages new and existing validators to maintain high quality operations via the incentive structure of our Delegation Program."
                    type="Subtitle"
                  />
                </div>
              </Numbersection>
              <Numbersection>
                <Text text="2" type="Number" color="#9e277b" />
                <VerticalLine height="70px" />
                <div style={{ maxWidth: "81%" }}>
                  <Text
                    text="Validator operators and RPC node operators may choose to participate in our Server Program to locate their operations in data centers distributed around the globe."
                    type="Subtitle"
                  />
                </div>
              </Numbersection>
              <Numbersection>
                <Text text="3" type="Number" color="#44167e" />
                <VerticalLine height="80px" />
                <div style={{ maxWidth: "81%" }}>
                  <Text
                    text="Community members and token holders can choose to participate in Stake Pools to directly increase the censorship resistance of the network while potentially earning tokens at the same time."
                    type="Subtitle"
                  />
                </div>
              </Numbersection>
            </div>
          </Level2>
        </Censorship>
      </TopLevel>
    </>
  );
};

export default TextSection;
