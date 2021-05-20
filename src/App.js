import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todos text="Take a walk." />
      <Todos text="Complete the project." />
      <Todos text="Practice some projects." />
    </div>
  );
}

export default App;
