import "./styles.css";
import { useState, useEffect } from "react";
import { getAllMissions } from "./api";
export default function App() {
  const [search, setSearch] = useState("");
  const [missions, setMissions] = useState([]);
  useEffect(() => {
    getMissions();
  }, [search]);
  const getMissions = async () => {
    const data = await getAllMissions();
    setMissions(data);
  };
  const onChange = (e) => {
    const valor = e.target.value;
    setSearch(valor);
  };
  return (
    <div className="App">
      <h1 className="title">Misiones de Space X</h1>
      <div>
        <input
          type="text"
          placeholder="Search Mission"
          onChange={onChange}
          value={search}
        ></input>
        <ul>
          {missions
            .filter((mission, idx) => {
              return mission.mission_name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase());
            })
            .map((mission, index) => {
              return <li>{mission.mission_name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}
