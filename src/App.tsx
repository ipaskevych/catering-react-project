import css from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <div className={css.app}>
      <Header />
      <Hero />
      <Contact/>
    </div>
  );
}
