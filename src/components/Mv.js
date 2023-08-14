import './Mv.css';
import mv from '../images/img_mv.png';

function Mv() {
  return (
    <section className="section mvSection">
      <div className="sectionTitleWrapper">
        <h1 className="sectionTitle pageTitle">
          <div className="pageTitleSub">FRONT-END DEVELOPER</div>
          <div className="pageTitleMain">NABEKURA</div>
        </h1>
      </div>

      <div className="mainImageArea">
        <div className="mainImageWrapper">
          <img
            className="mainImage"
            src={mv}
            alt="mainImage"
            width="600"
            height="747"
          />
        </div>
        <p className="mainImageDescription">
          Port town, parallel world after the storm
        </p>
      </div>
    </section>
  );
}

export default Mv;
