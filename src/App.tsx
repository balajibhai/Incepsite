import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Theme from "./components/Theme";

function App() {
  return (
    <div className="App">
      <Theme>
        <Header />
        <Body />
        <Footer />
      </Theme>
    </div>
  );
}

export default App;
