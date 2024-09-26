import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="bg-custom-img bg-cover bg-center min-h-screen">
        <Navbar className="flex" />
        <Hero />
      </div>
    </>
  );
}

export default App;
