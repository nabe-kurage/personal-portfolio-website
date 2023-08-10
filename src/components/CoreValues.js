import './CoreValues.css';
import img_collab from '../images/img_collab.png';
import img_global from '../images/img_gloabal.png';
import img_art from '../images/img_art.png';
import icon from '../images/icon_corevalues.svg';

function CoreValues() {
  return (
    <section className="section coreValueSection">
      <h1 className="sectionTitle coreValueSectionTitle">
        <img
          className="coreValueSectionTitleImage"
          src={icon}
          alt=""
          width="56px"
          height="56px"
        />
        <div>Nabekura’s Core Values</div>
      </h1>

      <ul className="coreValueList">
        <li className="coreValueListItem coreValueListItemCollab">
          <img
            className="coreValueListItemImage"
            src={img_collab}
            alt="Community&Collab"
            width="374"
            height="248"
          />
          <div className="coreValueListItemTitle">Community&Collab</div>
          <div className="coreValueListItemTitleJP">
            人との繋がりと貢献を大事にしています
          </div>
          <div className="coreValueListItemTitleText">
            人との繋がりと貢献を大事にしています。
            <br />
            とても人との繋がりと貢献を大事にしています。
            <br />
            という解説説明
          </div>
        </li>

        <li className="coreValueListItem coreValueListItemGlobal">
          <img
            className="coreValueListItemImage"
            src={img_global}
            alt="Global Culture Dive"
            width="374"
            height="248"
          />
          <div className="coreValueListItemTitle">Global Culture Dive</div>
          <div className="coreValueListItemTitleJP">
            世界中に出向き、体験と交流を大事にします
          </div>
          <div className="coreValueListItemTitleText">
            人との繋がりと貢献を大事にしています。
            <br />
            とても人との繋がりと貢献を大事にしています。
            <br />
            という解説説明
          </div>
        </li>

        <li className="coreValueListItem coreValueListItemArt">
          <img
            className="coreValueListItemImage"
            src={img_art}
            alt="Art & Creation"
            width="374"
            height="248"
          />
          <div className="coreValueListItemTitle">Art & Creation</div>
          <div className="coreValueListItemTitleJP">
            リアル、Web両方の物作りを楽しみます
          </div>
          <div className="coreValueListItemTitleText">
            人との繋がりと貢献を大事にしています。
            <br />
            とても人との繋がりと貢献を大事にしています。
            <br />
            という解説説明
          </div>
        </li>
      </ul>
    </section>
  );
}

export default CoreValues;
