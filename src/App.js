import { useState } from "react";
import "./App.scss";
import Masters from "./components/Masters/Masters.js";
import MastersForm from "./components/MastersForm/MastersForm.js";

const mockData = [
  {
    id: 1,
    name: "Краснова Ирина",
    position: "Мастер ногтевого сервиса",
    photo:
      "https://www.wallpapersdsc.net/wp-content/uploads/2020/04/Anna-Polina-Wallpapers-pack.jpg",
  },
  {
    id: 2,
    name: "Краснова Анна",
    position: "Мастер ногтевого сервиса",
    photo:
      "https://www.wallpapersdsc.net/wp-content/uploads/2020/04/Anna-Polina-Wallpapers-pack.jpg",
  },
  {
    id: 3,
    name: "Журавлева Анна",
    position: "Мастер ногтевого сервиса",
    photo:
      "https://www.wallpapersdsc.net/wp-content/uploads/2020/04/Anna-Polina-Wallpapers-pack.jpg",
  },
];

function App() {
  const [masters, setMasters] = useState(mockData);

  function createMaster(master) {
    console.log(master);
    setMasters(masters.concat([master]));
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
        <Masters masters={masters} onRemove={removeMaster} />
      </div>
    </div>
  );
}

export default App;
