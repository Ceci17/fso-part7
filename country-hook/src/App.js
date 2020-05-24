import React, { useState } from "react";

import Country from "./components/Country";
import { useCountry, useField } from "./hooks";

const App = () => {
  const nameInput = useField();
  const [name, setName] = useState("");
  const data = useCountry(name);

  const fetch = (e) => {
    e.preventDefault();
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country data={data} />
    </div>
  );
};

export default App;
