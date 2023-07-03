import TopImage from ".//components/TopImage.js";
import Title from ".//components/Title.js";
import Info from ".//components/Info.js";
import BottomEmail from ".//components/BottomEmail.js";

function App() {
  return (
    <div className="App">
      <TopImage />
      <div className="container">
        <Title />
        <Info />
        <BottomEmail />
      </div>
    </div>
  );
}

export default App;
