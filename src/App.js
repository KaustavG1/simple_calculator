import './App.css';
import Container from './Components/Container/Container';
import Navbar from './Components/Navbar/Navbar';
import Store from './Redux/Store/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Navbar />
        <Container />
      </div>
    </Provider>
  );
}

export default App;
