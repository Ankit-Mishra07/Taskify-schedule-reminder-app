import { useState } from 'react';
import './App.css';
import Home from './pages/Home';

function App() {

  const [isLogin, setIsLogin] = useState(false)



  return (
    <div className="App">
     <Home />
    </div>
  );

}

export default App;
