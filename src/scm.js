import getRandomNum from "./utils.js";
import runGame from "./index.js";

const gameDescription01 = 'Find the smallest common multiple of given numbers.';

const generateQuestionAndAnswer = () => {
  const nums = Array(3).fill(0).map(() => getRandomNum(1, 10));
  let scm = Math.max(...nums);
  while (!(scm % nums[0] === 0 && scm % nums[1] === 0 && scm % nums[2] === 0)) {
    scm += 1;
  }

  const question = nums.join(' ');
  const correctAnswer = `${scm}`;

  return [question, correctAnswer];
};

const gameSCM = () => runGame(gameDescription01, generateQuestionAndAnswer);

export default gameSCM;