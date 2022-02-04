import { useEffect, useState } from 'react';
import './App.css';
import StarRating from './stars/StarRating';

function App() {
  const [name, setName] = useState("Jan");
  const [admin, setAdmin] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  }, [name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? "admin" : "not admin"}`);
  }, [admin]);

  useEffect(() => {
    fetch(`https://catfact.ninja/facts`)
    .then(res => res.json())
    .then(res => setData(res.data));
  },[]);

  return (
    <div>
      <h1>useState demo</h1>
      <StarRating totalStars={6} />

      <h1>useEffect demo</h1>
      <section>
        <p>Congratulations {name}!</p>
        <button onClick={() => name == "Jan" ? setName("Will") : setName("Jan")}>
          Change winner
        </button>
        <p>{admin ? "logged in" : "not logged in"}</p>
        <button onClick={() => setAdmin(true)}>
          Log in
        </button>
      </section>

      <h1>useState and useEffect demo</h1>
      <ul>
        {data ? 
            data.map((fact) => (
              <li key={fact.length}>{fact.fact}</li>
            )) :
            <li>None yet!</li>
        }
      </ul>
    </div>

  );
}

export default App;
