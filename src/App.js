import { useState, useEffect } from "react";
import "./App.scss";
import Masters from "./components/Masters/Masters.js";
import MastersForm from "./components/MastersForm/MastersForm.js";
import MastersContext from './context/MastersContext.js';
import ApiService from './api/api-service';

function App() {
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const masters = await ApiService.getMasters();
      setMasters(masters);
    }
    fetchData();
  }, []);

  function createMaster(master) {
    const { id } = masters[masters.length - 1].id;
    setMasters(masters.concat({...master, id: id + 1 }));
    //setMasters([...masters, master]);
  }

  function removeMaster(id) {
    setMasters(masters.filter(m => m.id !== id));
  }

  return (
    <div className="container">
      <div className="app">
        <header>
          <h1>Beauty Saloon</h1>
        </header>
        <MastersForm onCreate={createMaster} />
        <br />
        <MastersContext.Provider value={{removeMaster}}>
          {masters.length === 0 ? <p>Нет данных о мастерах...</p> : 
          <Masters masters={masters} />}
      </MastersContext.Provider>
      </div>
    </div>
  );
}

export default App;
