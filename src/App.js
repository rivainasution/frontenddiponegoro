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
import GeneratedSelected from './pages/GenerateSelected';
import Login from './pages/Login';
import NewLogo from './pages/Setup/fragments/NewLogo';
import NewSetup from './pages/Setup/fragments/NewSetup';
import SingleGenerated from './pages/SingleGenerate';

function App() {
  const [menu, setMenu] = useState(1);

  const content = () => {
    if (menu === 0){
      return <Login />
    } else if (menu === 1) {
      return <Home />
    } else if (menu === 2) {
      return <Setup onClick={setMenu} />
    } else if (menu === 3) {
      return <Generate onClick={setMenu} />
    } else if (menu === 4) {
      return <History />
    } else if (menu === 5) {
      return <Login />
    } else if (menu === "generate"){
      return <SingleGenerated />
    } else if (menu === "selected"){
      return <GeneratedSelected />
    } else if (menu === "all"){
      return <GeneratedSelected />
    } else if (menu === "newsetup"){
      const title="Create New Setup";
      return <NewSetup title={title} />
    } else if (menu === "newlogo"){
      return <NewLogo />
    } else if (menu === "edit"){
      const title="Update Setup";
      return <NewSetup title={title} />
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
