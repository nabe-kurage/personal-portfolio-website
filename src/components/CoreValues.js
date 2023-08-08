import './CoreValues.css';

function CoreValues() {
  return (
    <section className="section coreValueSection">
      <h1 className="coreValueSectionTitle">
        <img
          className="coreValueSectionTitleImage"
          src="https://placehold.jp/56x56.png"
          alt=""
        />
        <div>Nabekura’s Core Values</div>
      </h1>

      <ul className="coreValueList">
        <li className="coreValueListItem coreValueListItemCollab">
          <img
            className="coreValueListItemImage"
            src="https://placehold.jp/374x248.png"
            alt=""
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
            src="https://placehold.jp/374x248.png"
            alt=""
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
            src="https://placehold.jp/374x248.png"
            alt=""
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
