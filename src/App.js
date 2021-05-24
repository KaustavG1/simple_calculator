import './App.css';
import Container from './Components/Container/Container';
import Navbar from './Components/Navbar/Navbar';
import { useSelector } from 'react-redux';

function App() {
  // Get Theme value from store
  let themeValue = useSelector(state => state.ModeReducer.isDarkTheme);

  // Change App Theme based on Theme value present in store
  if(themeValue) {
    document.body.classList.remove('LightMode');
    document.body.classList.add('DarkMode');
  } else {
    document.body.classList.remove('DarkMode');
    document.body.classList.add('LightMode');
  }

  return (    
    <div className="App">
      <Navbar />
      <Container />
    </div>    
  );
}

export default App;
