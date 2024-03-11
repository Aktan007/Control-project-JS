import readlineSync from 'readline-sync';
import meeting from './cli.js';
import gameSCM from './scm.js';
import startGame from './progression.js';

const showMenu = () => {
  const userName = meeting();

  console.log('Choose the game!');
  const games = ['SCM', 'Progression'];
  const choise = readlineSync.keyInSelect(games, 'Your choise: ');

  switch (choise) {
    case 0:
      gameSCM(true, userName);
      break;
    case 1:
      startGame(true, userName);
      break;
    default:
      console.log('See you next time!');
  }
};

export default showMenu;