export default function CountrySelect({ countries, handleSetCountry }) {

  return (
    <section className="news-app__countries">
      {countries.map(({ code, countryName }) => (
        <button onClick={() => handleSetCountry(code)} className="news-app__countries-button" key={code} role="button">
          {countryName}
        </button>
      ))}
    </section>
  );
}