import './App.css';
import Address from './Component/Address';
import FullName from './Component/Profile/ FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div> 
      <ProfilePhoto/>
      <FullName />
      <Address />
    </div>
  );
}

export default App;
