import { getFormattedDate, stripHtml } from "../functions.js";

export default function NewsHeadlines({ country, headlines, isLoading }) {
  return (
    <section className="news-app__news">
      {!isLoading && headlines && headlines.length !== 0 &&
        <>
          <h2 className="news-app__news-title">International News Stories</h2>
          <div className="news-app__news-country">{country?.name}</div>
          <div className="news-app__news-items">
            {headlines.map(({ title, publishedAt, url, author, source }) => (
              <a
                href={url}
                className="news-app__news-items-headline news-headline"
                target="_blank"
                key={`${publishedAt}-${url}`}
              >
                {publishedAt && <div className="news-headline__date">{getFormattedDate(publishedAt)}</div>}
                <h3 className="news-headline__title">{stripHtml(title)}</h3>
                <div className="news-headline__meta">
                  {author &&
                    <div className="news-headline__author">
                      Author: {stripHtml(author)}
                    </div>
                  }
                  {source?.name &&
                    <div className="news-headline__source">
                      Source: {stripHtml(source?.name)}
                    </div>
                  }
                </div>
              </a>
            ))}
          </div>
        </>
      }
    </section>
  );
}