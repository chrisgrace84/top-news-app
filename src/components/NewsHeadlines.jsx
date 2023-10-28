export default function NewsHeadlines({ headlines }) {
  return (
    <section className="news-app__news">
      {headlines.length !== 0 &&
        <div className="news-app__news-items">
          {headlines.map(({ title, publishedAt, url, author, source }) => (
            <a
              href={url}
              className="news-app__news-items-headline news-headline"
              target="_blank"
              key={`${publishedAt}-${url}`}
            >
              <h3 className="news-headline__title">{title}</h3>
              <div className="news-headline__meta">
                <div className="news-headline__author">
                  Author: {author}
                </div>
                <div className="news-headline__source">
                  Source: {source?.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      }
    </section>
  );
}