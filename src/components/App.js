import { useState } from 'react';
import '../styles/App.scss';


function App() {
  const renderSolutionLetters = () => {

    const wordLetters = word.split(setWord());
    console.log(`hola soy ${wordLetters}`);
    // wordLetters.map((eachWord) => (
    //   <li key={eachword} className="letter">{eachWord}</li>
    // ))
  };
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState(''); // lo ponemos vacío pq al cargar no hay nada
  const [word, setWord] = useState('katacroker');
  const [userLetters, setUserLetters] = useState([]);


  const handleClick = (event) => {
    event.preventDefault();
    setNumberOfErrors(numberOfErrors + 1);

  }

  const handleLastLetter = (event) => {
    const valueInput = event.target.value;

    let htmlPattern = /^[a-zA-ZñÑá-úÁ-Ú´]$/; //función test que devuelve si es true o false, y comprueba si el input (entre paréntesis) coindice con la expresión regular. Si añadimos un más antes del dolar podríamos escribir más letras
    if (htmlPattern.test(valueInput)) {
      setLastLetter(valueInput);
    } else {
      setLastLetter('');
      console.log('no funciona')
    }


    console.log(valueInput);
  }

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>

            <ul className="letters" onChange={renderSolutionLetters}>
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              // autocomplete="off"
              className="form__input"
              // maxlength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange={handleLastLetter}
              value={lastLetter}
            />
            <button onClick={handleClick}>Incrementar</button>
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
