const listScore = document.querySelector('.score-list');

const displayScore = (score) => {
  listScore.innerHTML = '';
  score.forEach((item) => {
    const ulelement = document.createElement('li');
    ulelement.innerHTML = `<li class="score">   ${item.user}  :  ${item.score} </li>`;
    listScore.appendChild(ulelement);
  });
};

export default displayScore;