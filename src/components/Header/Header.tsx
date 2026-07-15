import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.logo}>
          <span className={css.logoText}>Green<span className={css.logoAccent}>Feast</span></span>
        </div>

        <nav className={css.nav}>
          <a href="#buffet" className={css.navLink}>Buffet</a>
          <a href="#fingerfood" className={css.navLink}>Fingerfood</a>
          <a href="#konditorei" className={css.navLink}>Konditorei</a>
          <a href="#getränke" className={css.navLink}>Getränke</a>
          <a href="#extra" className={css.navLink}>Extra</a>
          <a href="#bildergalerie" className={css.navLink}>Bildergalerie</a>
          <a href="#contacts" className={css.navLink}>Kontakte</a>
        </nav>

        <div className={css.actions}>
          <div className={css.cart}>
            <span className={css.cartIcon}>🛒</span>
            <span className={css.cartCount}>0</span>
          </div>
          <button className={css.ctaButton}>Angebot anfordern</button>
        </div>
      </div>
    </header>
  );
}