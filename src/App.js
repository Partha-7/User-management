import "./App.css";
import Users from "./components/Users";
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <Container>
        <Users />
      </Container>
    </div>
  );
}

export default App;
