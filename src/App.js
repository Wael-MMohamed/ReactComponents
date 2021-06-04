import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-sm-2'></div>
          <div className='col-sm-8'>
            <ProfilePhoto />
            <FullName />
            <Address />
          </div>
          <div className='col-sm-2'></div>
        </div>  
      </div>
    </div>
  );
}

export default App;
