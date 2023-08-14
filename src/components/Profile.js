import './Profile.css';
import img_icon from '../images/img_icon.jpg';
import img_collab from '../images/img_collab.png';
import img_global from '../images/img_gloabal.png';
import img_art from '../images/img_art.png';
import icon_basicInfo from '../images/icon_basicInfo.svg';
import icon_corevalues from '../images/icon_corevalues.svg';

function Profile() {
  return (
    <section className="section profileValueSection">
      <h1 className="sectionTitle profileValueSectionTitle">Profile</h1>

      <div className="profileArea">
        <img
          className="profileValueSectionTitleImage"
          src={icon_basicInfo}
          alt=""
        />
        <h2 className="profileAreaTitle">Basic Info</h2>
        <div className="profileWrapper">
          <div className="profileIconImageWrapper">
            <img
              className="profileIconImage"
              src={img_icon}
              alt=""
              height="233px"
              width="233px"
            />
          </div>
          <dl className="profileInfoDl">
            <dt className="profileInfoDt">なべくら</dt>
            <dd className="profileInfoDd">
              大学、大学院と農学を学ぶが、
              <br />
              休学中に出会ったWebプログラミングと写真加工のバイトから、
              <br />
              何かしら目に見えるものを作る仕事をしていきたいと感じる。
              <br />
              2017年、フロントエンド専門のSES会社に入社。
              <br />
              その後も転職しつつフロントエンドを中心に業務を行う。
              <br />
            </dd>
          </dl>
        </div>
      </div>

      <div className="profileArea">
        <img
          className="profileValueSectionTitleImage profileValueSectionTitleImageCorevalues"
          src={icon_corevalues}
          alt=""
        />
        <h2 className="profileAreaTitle">Core Values</h2>
        <ul className="profileValueList">
          <li className="profileValueListItem">
            <img
              className="profileValueListItemImage"
              src={img_collab}
              alt="Community&Collab"
              width="374"
              height="248"
            />
            <div className="profileValueListItemTitle">Community&Collab</div>
            <div className="profileValueListItemTitleJP">
              人との繋がりと貢献を大事にしています
            </div>
          </li>

          <li className="profileValueListItem">
            <img
              className="profileValueListItemImage"
              src={img_global}
              alt="Global Culture Dive"
              width="374"
              height="248"
            />
            <div className="profileValueListItemTitle">Global Culture Dive</div>
            <div className="profileValueListItemTitleJP">
              世界中に出向き、体験と交流を大事にします
            </div>
          </li>

          <li className="profileValueListItem">
            <img
              className="profileValueListItemImage"
              src={img_art}
              alt="Art & Creation"
              width="374"
              height="248"
            />
            <div className="profileValueListItemTitle">Art & Creation</div>
            <div className="profileValueListItemTitleJP">
              リアル、Web両方の物作りを楽しみます
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Profile;
