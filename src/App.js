import React, { useState, useEffect } from "react";
import "./styles.css";
import { ClickCounterContainer } from "./click-counter/click-counter-container";

const url = "https://jsonplaceholder.typicode.com/users";

const asyncPipe = (...fns) => x => fns.reduce(async (y, f) => f(await y), x);

const toJson = response => response.json();

const fetchData = setState => asyncPipe(fetch, toJson, setState);

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData(setUsers)(url);
  }, []);

  return (
    <div className="App">
      Hallo
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
      <ClickCounterContainer />
    </div>
  );
}
