
import './App.css';
import CheckBoxSec from './components/CheckBox';
import ControlledComp from './components/CustomHook';
import UnControlledComp from './components/UnControlledComp';

function App() {
  return (
    <div>
      <CheckBoxSec/>
      <UnControlledComp/>
      <ControlledComp/>
    </div>
  );
}

export default App;
