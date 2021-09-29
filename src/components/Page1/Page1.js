import { useState, useEffect } from "react";

import { wrappedFetch } from "../../utils";

export const Page1 = (props) => {
  const [universities, setUniversities] = useState();

  useEffect(
    () => {
      wrappedFetch(
        "http://universities.hipolabs.com/search?country=United+Kingdom"
      )
        .then((resp) => setUniversities(resp))
        .catch((error) => {
          console.log(error.toString());
          setUniversities([]);
        });
    },
    // Dependency list, if empty, runs the callback function once
    []
  );

  if (!universities) return <div>Loading...</div>;

  return (
    <table>
      <thead>
        <tr>
          {["University", "Country", "Web Site"].map((headerTitle) => (
            <th>{headerTitle}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {universities.map((university) => (
          <tr>
            <td>{university.name}</td>
            <td>{university.country}</td>
            <td>
              <a
                target="_blank"
                rel="noreferrer"
                href={university.web_pages[0]}
              >
                Link
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
