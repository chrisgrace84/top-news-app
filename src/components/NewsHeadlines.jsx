export default function NewsHeadlines({ headlines }) {
  return (
    <section className="news-app__news">
      {headlines.length !== 0 &&
        <div className="news-app__news-items">
          {headlines.map(({ title, publishedAt, url }) => (
            <div className="news-app__news-items news-headline" key={`${publishedAt}-${url}`}>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      }
    </section>
  );
}