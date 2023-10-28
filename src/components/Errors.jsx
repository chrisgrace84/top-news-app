export default function Errors({ message }) {
  return (
    <section className="news-app__error fetch-error">
      <h2 className="fetch-error__title">Error:</h2>
      <div className="fetch-error__message">
        {message}
      </div>
    </section>
  );
}