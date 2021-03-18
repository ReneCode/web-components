// https://codesandbox.io/s/preact-web-components-forked-fjfqb?file=/src/index.js:0-28
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

import register from "preact-custom-element";

const NameList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const loadNames = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon";
        const response = await fetch(url);
        const json = await response.json();
        const names = json.results.map((e) => ({ name: e.name, url: e.url }));
        setPokemons(names);
      } catch (err) {
        console.error(err);
      }
    };
    loadNames();
  }, []);

  return (
    <div>
      <p>Pokemon List</p>
      <ul>
        {pokemons.map((pokemon) => {
          return <li>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
};

const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

const FirstComponent = ({ name }) => {
  const yeah = () => {
    console.log("yeah!");
  };

  return (
    <div>
      <Button onClick={yeah}>CLICK MICH</Button>
      <NameList></NameList>
    </div>
  );
};

register(FirstComponent, "x-first", ["name"]);
