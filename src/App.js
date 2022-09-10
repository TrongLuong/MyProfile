import Navbar from "./components/Navbar";
import data from "./components/data";
import "./style.scss";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Project";
import Experience from "./components/Experience";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import Section from "./components/Section";
function App() {
  return (
    <div className="container">
      {/* <LoginForm /> */}
      <Navbar data={data} />
      <Home id={data[0].name} />
      <About id={data[1].name} />
      <Experience id={data[2].name} />
      <Project id={data[3].name} />

      {/* {data.map((items) => {
        return <Section title={items.name} id={items.name} key={items.id} />;
      })} */}
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
