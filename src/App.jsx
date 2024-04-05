import './App.css';
import ChoiceBox from './components/ChoiceBox';
import Button from './components/Button';
import { useState } from 'react';
import { Axios } from 'axios';

function App() {
  const [cmpChoice, setcmpChoice] = useState('');
  const [userChoice, setuserChoice] = useState('');
  const choiceArr = ['Rock', 'Paper', 'Scissor'];
  const [userScore, setuserScore] = useState(0);
  const [cmpScore, setcmpScore] = useState(0);

  async function sendGameResultToBackend() {
    try {
      const response = Axios.post('http://localhost:5000/api/game', {
       
        data: JSON.stringify({ userChoice, cmpChoice }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Game result sent successfully:', data);
      } else {
        console.error('Failed to send game result');
      }
    } catch (error) {
      console.error('Error sending game result:', error);
    }
  }

  function handleClick(string) {
    const comp = Math.floor(Math.random() * 3);
    setcmpChoice(choiceArr[comp]);

    for (const i in choiceArr) {
      if (choiceArr[i] === string) {
        setuserChoice(choiceArr[i]);
      }
    }

    CheckWin(userChoice, cmpChoice);
    sendGameResultToBackend();
  }

  function CheckWin(userChoice, cmpChoice) {
    console.log(userChoice, cmpChoice);
    if (userChoice === cmpChoice) {
      console.log('Equal choices');
      return;
    }
    if (
      (userChoice === 'Rock' && cmpChoice === 'Paper') ||
      (userChoice === 'Paper' && cmpChoice === 'Scissor') ||
      (userChoice === 'Scissor' && cmpChoice === 'Rock')
    ) {
      const newScore = userScore + 1;
      setcmpScore(newScore);
      console.log('Computer won');
    } else {
      const newScore = userScore + 1;
      setuserScore(newScore);
      console.log('User won');
    }
  }

  function Reset() {
    setcmpScore(0);
    setuserScore(0);
    setcmpChoice('');
    setuserChoice('');
  }

  return (
    <>
      <div className="body">
        <div className="compScore score">Computer's Score: {cmpScore}</div>
        <div className="usersScore score">Your Score: {userScore}</div>
        <button className="resetbtn" onClick={Reset}>
          Reset
        </button>

        <div className="playContainer">
          <div className="box1">
            {/* Computer's choice box */}
            <ChoiceBox choice={cmpChoice} />
            {/* User's Choice box */}
            <ChoiceBox choice={userChoice} />
          </div>

          <div className="computerChoice">Computer's Choice is: {cmpChoice}</div>

          <div className="buttonContainer">
            <Button type="Rock" handleClick={handleClick} />
            <Button type="Paper" handleClick={handleClick} />
            <Button type="Scissor" handleClick={handleClick} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
