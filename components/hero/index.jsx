import "./hero.css";

export default function Hero({ darkMode }) {
  return (
    <div className={`heroContainer ${darkMode ? "dark" : ""}`}>
      <h1>
        FrontEnd <br /> Sınavına
      </h1>
      <h1>
        <b>Hoş Geldiniz</b>
      </h1>
      <p>Başlamak için bir konu seçin.</p>
    </div>
  );
}
