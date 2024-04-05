export default function App() {
  
  return (<div>
    <Button/>
    <Button/>
  </div>);
}

function Button(){
  const buttonText = "click me with react!";
  return (
    <button type="button" 
    onClick={() => console.log("Hello World from React")}>
    {buttonText}
  </button>);
}