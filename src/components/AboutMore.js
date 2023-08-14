import './AboutMore.css';
import img_creator from '../images/img_creator.png';
import img_event from '../images/img_event.png';
import img_travel from '../images/img_travel.png';
import img_bouldering from '../images/img_bouldering.png';

function AboutMore() {
  return (
    <article className="article aboutMoreArticle">
      <h1 className="aboutMoreTitle">About more</h1>
      <p className="aboutMoreText">趣味とか最近の興味とか</p>

      <div className="activitiesArea">
        <h2 className="articleSubTitle">Activities & hobbies</h2>
        <p className="articleSubText">実際に行っている活動や趣味について</p>

        <ul className="activityList">
          <li className="activityListItem activityListItemCollab">
            <img className="activityListItemImage" src={img_event} alt="" />
            <div className="activityListItemTitle">Event&Workshop</div>
            <div className="activityListItemTitleJP">
              イベント参加やお手伝い楽しい🏃
            </div>
          </li>

          <li className="activityListItem activityListItemArt">
            <img className="activityListItemImage" src={img_creator} alt="" />
            <div className="activityListItemTitle">Creator</div>
            <div className="activityListItemTitleJP">
              技術同人誌書いたりグッズ作ったり📚
            </div>
          </li>

          <li className="activityListItem">
            <img
              className="activityListItemImage"
              src={img_bouldering}
              alt=""
            />
            <div className="activityListItemTitle">Bouldering</div>
            <div className="activityListItemTitleJP">週2でボルダリング💪</div>
          </li>

          <li className="activityListItem activityListItemGrobal">
            <img className="activityListItemImage" src={img_travel} alt="" />
            <div className="activityListItemTitle">Travel</div>
            <div className="activityListItemTitleJP">海外旅行行きがち🌍</div>
          </li>
        </ul>

        <div className="LikesArea">
          <h2 className="articleSubTitle">Likes</h2>
          <p className="articleSubText">好きなもの、お気に入り</p>
          <div className="LikesAreaWrapper">Coming soon.....</div>
        </div>
      </div>
    </article>
  );
}

export default AboutMore;
