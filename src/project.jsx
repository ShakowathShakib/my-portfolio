import projectImg01 from "./assets/projectImg.jpeg";
import fruitsProject from "./assets/fruit.png";
import wallet from "./assets/wallet.png";

export default function Project() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "100px",
      }}
    >
      {/* project-01 */}
      <div className="project-card">
        <img src={projectImg01} alt="flowr shop" className="project-image" />
        <div className="project-details">
          <h2 className="project-name">Flower shop</h2>
          <p className="project-description">
            I have done this project using html and css also. It is a normal flowe website design. You can many section of this.
          </p>
          <p className="project-languages">Languages: Html, CSS5</p>
          <a
            target="_blank"
            href="https://shakowathshakib.github.io/flower-shop/"
            rel="noreferrer"
          >
            Live link
          </a>
        </div>
      </div>

      {/* project-02 */}
      <div className="project-card">
        <img src={wallet} alt="sakib-walet" className="project-image" />
        <div className="project-details">
          <h2 className="project-name">Sakib-Wallet</h2>
          <p className="project-description">
            I have done this project using html and css and js. In this project
            you can increase or decreased the
            value and add the description.
          </p>
          <p className="project-languages">Languages: Html, CSS5, Js</p>
          <a
            target="_blank"
            href="https://shakowathshakib.github.io/shakib-eWallet/"
            rel="noreferrer"
          >
            Live link
          </a>
        </div>
      </div>

      {/* project-03 */}
      <div className="project-card">
        <img src={fruitsProject} alt="flowr shop" className="project-image" />
        <div className="project-details">
          <h2 className="project-name">Fruit shop</h2>
          <p className="project-description">
            I have done this project using Html, CSS and tailwind CSS. It is a
            project of Fruit Shop. You can see a slider on home page.
          </p>
          <p className="project-languages">Languages: Html, CSS5</p>
          <a
            target="_blank"
            href="https://shakowathshakib.github.io/Fruit-shop/"
            rel="noreferrer"
          >
            Live link
          </a>
        </div>
      </div>
    </div>
  );
}
