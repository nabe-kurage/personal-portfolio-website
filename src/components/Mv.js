import './Mv.css';
import mv from '../images/img_mv.png';

function Mv() {
  return (
    <section className="section mvSection">
      <h1 className="sectionTitle pageTitle">
        <div className="pageTitleSub">
          <span className="pageTitleSubFirstHalf">FRONT-END</span>
          <span className="pageTitleSubLatterHalf">developer</span>
        </div>
        <div className="pageTitleMain">NABEKURA</div>
      </h1>

      <div className="mainImageArea">
        <img
          className="mainImage"
          src={mv}
          alt="mainImage"
          width="600"
          height="747"
        />
      </div>
    </section>
  );
}

export default Mv;
