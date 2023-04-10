import { useState } from 'react'
import './App.css'
import divider from './assets/pattern-divider-mobile.svg'
import iconDice from './assets/icon-dice.svg'
function App() {
  const [advice, setAdvice] = useState<dataResp>({
      slip:  {
          id: 0,
          advice: ''
      }
  });

  interface dataResp {
      slip: {
          id: number,
          advice: string,
      },
  }

  const handleClick = async () => {
    const url ='https://api.adviceslip.com/advice'

    try {
        await fetch(url)
            .then((response) => response.json())
            .then((data: dataResp) => setAdvice(data));

    } catch(err) {
        console.log(`Get fail with error: ${err}`);
    }

  };


  return (
    <div className="App">
      <div className={'container'}>
          <p>
              ADVICE
              <span> #{advice.slip.id}</span>
          </p>
          <h3 className={'advice-text'}>
              {advice.slip.advice}
          </h3>
          <div className={'container-img'}>
             {/*<img src={divider} alt={'divider mobile icon'}/>*/}
              <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="hsl(193, 38%, 95%)" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
          </div>
          <button
              className={'btn'}
              onClick={handleClick}>
              <img src={iconDice} alt={'icon dice'}/>
          </button>
      </div>
    </div>
  )
}

export default App
