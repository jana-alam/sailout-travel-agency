import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header></Header>
        <Login></Login>
      </AuthProvider>
    </div>
  );
}

export default App;
