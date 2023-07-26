import data from "./data";
import { useState } from "react";
import { List } from "./List";
const App = () => {
  const [people, setPeople] = useState(data);
  const clearList = () => {
    setPeople([]);
  };
  return (
    <div>
      <h1>{people.length} Birthdays Today</h1>
      <List people={people} />
      <button type="button" className="btn" onClick={clearList}>
        {" "}
        Clear All{" "}
      </button>
    </div>
  );
};
export default App;
