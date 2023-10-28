import classNames from 'classnames'

export default function CountrySelect({ countryState, countries, handleSetCountry }) {

  return (
    <section className="news-app__countries">
      {countries.map(country => (
        <button
          onClick={() => handleSetCountry({...country})}
          className={classNames(
            "news-app__countries-button",
            countryState?.code === country?.code && "news-app__countries-button--active"
          )}
          role="button"
          key={country?.code}
        >
          {country?.name}
        </button>
      ))}
    </section>
  );
}