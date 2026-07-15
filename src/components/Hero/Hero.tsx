import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.overlay}></div> 
      
      <div className={css.container}>
        <div className={css.content}>
          <h1 className={css.title}>
            Exquisites Catering <br />
            <span className={css.titleAccent}>mit Stil und Geschmack</span>
          </h1>
          <p className={css.description}>
            Erstklassige Buffets, Fingerfood und kulinarische Boxen für Ihre besonderen Events. Berechnen Sie Ihre Menükosten online mit nur wenigen Klicks.
          </p>
          <div className={css.ctaGroup}>
            <a href="#menu" className={css.primaryBtn}>Menü wählen</a>
            <a href="#services" className={css.secondaryBtn}>Unsere Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}