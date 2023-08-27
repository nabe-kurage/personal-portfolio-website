import './News.css';
function News() {
  const newsContents = [
    { title: 'サイト公開しました', date: '2023/08/20', link: '' },
  ];
  return (
    <section className="section newsSection">
      <h1 className="sectionTitle newsTitle">News</h1>

      <ul className="newsList">
        {newsContents.map((news) => (
          <li>
            <span className='newsDate'>{news.date}</span>
            {news.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default News;
