export default function CountrySelect({ countries, handleSetCountry }) {

  return (
    <section className="news-app__countries">
      {countries.map(country => (
        <button onClick={() => handleSetCountry({...country})} className="news-app__countries-button" key={country.code} role="button">
          {country.countryName}
        </button>
      ))}
    </section>
  );
}