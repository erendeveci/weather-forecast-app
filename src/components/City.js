import "./City.css";
const City = (props) => {
  const { weather } = props;

  return (
    <div className="cityContainer">
      {" "}
      <p
        style={{
         
          fontSize: "5rem",
          marginBottom: "-4rem",
        }}
      >
        {weather.name}
      </p>
      <h1
        style={{
         
          fontSize: "6rem",
          marginBottom: "0.5rem",
        }}
      >
        {weather.main.temp.toFixed()} °C
      </h1>
      <p
        style={{
         
          fontSize: "2rem",
          textTransform:"capitalize"
        }}
      >
        {weather.weather.map((data) => data.description).join(",")}
      </p>
      <h4 style={{ fontSize: "1.8rem" }}>
        {new Date(weather.dt * 1000).toLocaleDateString()}
      </h4>
    </div>
  );
};
export default City;
