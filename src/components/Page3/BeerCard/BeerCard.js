export const BeerCard = ({ beer }) => {
  return <div style={{ width: "300px", display: "inline-block" }}>
    <img src={beer.image_url} alt={beer.name} height="300" />
    <div><b>Name: </b>{beer.name}</div>
    <div><b>Description: </b>{beer.description}</div>
  </div>
};