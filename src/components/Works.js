import './Works.css';
import icon from '../images/icon_works.svg';

function Works() {
  return (
    <section className="section worksSection">
      <h1 className="sectionTitle WorksTitle">
        <img
          className="worksTitleImage"
          src={icon}
          alt=""
          width="56px"
          height="56px"
        />
        <div>Nabekura’s Works</div>
      </h1>
      <p className="worksText">Coming soon.....</p>
    </section>
  );
}

export default Works;
