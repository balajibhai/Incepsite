import "./App.css";
import NormalButton from "./components/NormalButton";
import VerticalLine from "./components/VerticalLine";
import Text from "./components/Text";
import Image from "./components/Image";
import Theme from "./components/Theme";
import CardComponent from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Text text="Hello, world!" />
      <Text text="Welcome to React" />
      <NormalButton text="Click Me" />
      <VerticalLine />
      <Image
        src="https://solana.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader-2.a3e5e47e.png&w=1080&q=50"
        alt="Example image"
      />
      <Text
        text="1"
        style={{
          color: "#bf2b06",
          fontSize: "50px",
          fontWeight: "500",
          fontFamily: "Diatype,Arial,sans-serif",
        }}
      />
      <Text
        text="2"
        style={{
          color: "#9e277b",
          fontSize: "50px",
          fontWeight: "500",
          fontFamily: "Diatype,Arial,sans-serif",
        }}
      />
      <Text
        text="3"
        style={{
          color: "#44167e",
          fontSize: "50px",
          fontWeight: "500",
          fontFamily: "Diatype,Arial,sans-serif",
        }}
      />
      <Theme />
      <CardComponent />
      <Footer />
    </div>
  );
}

export default App;
