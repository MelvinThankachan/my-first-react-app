function Greeting(): JSX.Element {
  return <h1>"I swear by my pretty floral bonnet, I will end you."</h1>;
}

function Image() {
  return (
    <img
      style={{
        width: "100%",
        height: "auto",
      }}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chicken_makhani.jpg/1920px-Chicken_makhani.jpg"
      alt=""
    />
  );
}

export { Image };
export default Greeting;
