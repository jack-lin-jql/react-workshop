import React from "react";

import { wrappedFetch } from "../../utils";

export class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomDogLinks: new Array(30).fill(undefined),
    };
  }

  componentDidMount() {
    for (let i = 0; i < 30; i++) {
      wrappedFetch("https://random.dog/woof.json").then((resp) => {
        this.setState((prevState) => {
          const newRandomDogLinks = [...prevState.randomDogLinks];
          newRandomDogLinks[i] = resp.url;
          return {
            randomDogLinks: newRandomDogLinks,
          };
        });
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.randomDogLinks.map((dogResource, index) => (
          <div key={index}>
            {!!dogResource ? (
              dogResource.match(/.*\.mp4$/g) ? (
                <video width="500" controls>
                  <source src={dogResource} type="video/mp4" />
                </video>
              ) : (
                <img src={dogResource} width="500" alt={dogResource} />
              )
            ) : (
              <>Loading...</>
            )}
          </div>
        ))}
      </div>
    );
  }
}
