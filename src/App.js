
import './App.css';
import Adress from './Component/Profile/Adress';
import FullName from './Component/Profile/FullName';
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import './index.css'
function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
