// create your App component here
import React, { useState, useEffect } from "react";


function App() {
  const [dog, setDog] = useState(null);


  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDog(data.message);
      });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE

   if (!dog) return <p>Loading...</p>;

  return <img src = {dog} alt = "A Random Dog"></img>
}

export default App;