export default function CountrySelect({ countries }) {

  return (
    <section className="news-app__countries">
      {countries.map(({ code, countryName }) => (
        <button className="news-app__countries" key={code} role="button">
          {countryName}
        </button>
      ))}
    </section>
  );
}