import Home from "./pages/Home/Home";
import { ToggleProvider } from "./components/Context/ToggleContext";

function App() {
  return (
    <div className="App">
      <ToggleProvider>
        <Home />
      </ToggleProvider>
    </div>
  );
}

export default App;
