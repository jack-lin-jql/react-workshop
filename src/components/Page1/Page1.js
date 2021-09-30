import { useState, useEffect } from "react";

import { wrappedFetch } from "../../utils";

export const Page1 = (props) => {
  const [publicAPIs, setPublicAPIs] = useState();

  useEffect(
    () => {
      wrappedFetch("https://api.publicapis.org/entries")
        .then((resp) => setPublicAPIs(resp.entries))
        .catch((error) => {
          console.log(error.toString());
          setPublicAPIs([]);
        });
    },
    // Dependency list, if empty, runs the callback function once
    []
  );

  if (!publicAPIs) return <div>Loading...</div>;

  return (
    <table>
      <thead>
        <tr>
          {["Name", "Category", "Description", "Link"].map((headerTitle) => (
            <th key={headerTitle}>{headerTitle}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {publicAPIs.map((publicAPI, index) => (
          <tr key={index}>
            <td>{publicAPI.API}</td>
            <td>{publicAPI.Category}</td>
            <td>{publicAPI.Description}</td>
            <td>
              <a target="_blank" rel="noreferrer" href={publicAPI.Link}>
                Click me!
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
