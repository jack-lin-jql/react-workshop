import { useEffect, useState } from "react";

import { wrappedFetch } from "../../utils";
import { BeerCard } from "./BeerCard";

export const Page3 = (props) => {
  const [beers, setBeers] = useState();

  useEffect(() => {
    wrappedFetch("https://api.punkapi.com/v2/beers").then((resp) =>
      setBeers(resp)
    );
  }, []);

  if (!beers) return <>Loading...</>;

  const beersIn3 = [];

  beers.forEach((beer, index) => {
    if (!(index % 3)) beersIn3.push([]);

    beersIn3[beersIn3.length - 1].push(beer);
  });

  return (
    <div>
      {beersIn3.map((threeBeers) => (
        <div style={{ display: "flex" }}>
          {threeBeers.map((beer) => (
            <BeerCard beer={beer} />
          ))}
        </div>
      ))}
    </div>
  );
};
