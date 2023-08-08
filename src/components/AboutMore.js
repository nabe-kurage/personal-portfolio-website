import './AboutMore.css';

function AboutMore() {
  return (
    <article className="article aboutMoreArticle">
      <h1 className="aboutMoreTitle">About more</h1>
      <p className="aboutMoreText">もうちょっと私について付け加えると…</p>

      <div className="activitiesArea">
        <h2 className="articleSubTitle">Activities & hobbies</h2>
        <p className="articleSubText">実際に行っている活動や趣味について</p>

        <ul className="activityList">
          <li className="activityListItem activityListItemCollab">
            <img
              className="activityListItemImage"
              src="https://placehold.jp/374x248.png"
              alt=""
            />

            <div className="activityListItemTitle">Event&Workshop</div>

            <div className="activityListItemTitleJP">
              様々なイベントへの参加、お手伝い
            </div>
          </li>

          <li className="activityListItem activityListItemArt">
            <img
              className="activityListItemImage"
              src="https://placehold.jp/374x248.png"
              alt=""
            />
            <div className="activityListItemTitle">Creator</div>
            <div className="activityListItemTitleJP">
              同人誌作成やグッズ販売会への参加
            </div>
          </li>

          <li className="activityListItem activityListItemGrobal">
            <img
              className="activityListItemImage"
              src="https://placehold.jp/374x248.png"
              alt=""
            />
            <div className="activityListItemTitle">Travel</div>
            <div className="activityListItemTitleJP">
              様々なイベントへの参加、手伝い
            </div>
          </li>

          <li className="activityListItem">
            <img
              className="activityListItemImage"
              src="https://placehold.jp/374x248.png"
              alt=""
            />
            <div className="activityListItemTitle">Bouldering</div>
            <div className="activityListItemTitleJP">週2でボルダリング</div>
          </li>
        </ul>

        <div className="LikesArea">
          <h2 className="articleSubTitle">Likes</h2>
          <p className="articleSubText">特に好きな作品</p>
          <div>...</div>
        </div>
      </div>
    </article>
  );
}

export default AboutMore;
