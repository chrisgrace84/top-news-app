export default function NewsHeadlines({ headlines, country }) {
  const topHeadlines = headlines.slice(0, 5);

  return (
    <section className="news-app__news">
      <h2>Top News in {country?.countryName}</h2>
      {!headlines && <p>No News Available</p>}
      {headlines &&
        <div className="news-app__news-items">
          {topHeadlines.map(({ title, publishedAt, url }) => (
            <div className="news-app__news-items news-headline" key={`${publishedAt}-${url}`}>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      }
    </section>
  );
}