import "./styles.css";
import { useState, useEffect } from "react";
import { fetchHistory } from "./api";
import MissionCard from "./components/MissionCard";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getHistory();
  }, []);
  const getHistory = async () => {
    const history = await fetchHistory();
    setData(history);
  };

  return (
    <div className="App">
      <h1 className="title">Misiones de Space X</h1>
      <div>
        <ul>
          {data.map((item, idx) => {
            return <MissionCard key={idx} mission={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}
