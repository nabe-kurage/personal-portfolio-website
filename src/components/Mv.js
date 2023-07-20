import './Mv.css';
function Mv() {
  return (
    <section className="section mvSection">
      <h1 className="pageTitle">
        <div className="pageTitleSub">
          <span className="pageTitleSubFirstHalf">FRONT-END</span>
          <span className="pageTitleSubLatterHalf">developer</span>
        </div>
        <div className="pageTitleMain">NABEKURA</div>
      </h1>

      <div className="mainImageArea">
        <img
          className="mainImage"
          src="https://placehold.jp/600x747.png"
          alt="mainImage"
        />
      </div>
    </section>
  );
}

export default Mv;
