import { useState } from 'react';
import {
  Header,
  Footers  
} from './components';
import { 
  Home,
  Setup,
  Generate,
  History
} from './pages';
function App() {
  const [menu, setMenu] = useState(1);

  const content = () => {
    if (menu === 1) {
      return <Home />
    } else if (menu === 2) {
      return <Setup />
    } else if (menu === 3) {
      return <Generate />
    } else if (menu === 4) {
      return <History />
    }
  }

  return (
    <div>
      <Header onClick={setMenu} />
      {content()}
      <Footers />
    </div>
  );
}

export default App;
