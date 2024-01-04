const URL = "https://opentdb.com/api.php?amount=1&type=multiple";

const ques = document.getElementById("question");
const ans1 = document.getElementById("ans-1");
const ans2 = document.getElementById("ans-2");
const ans3 = document.getElementById("ans-3");
const ans4 = document.getElementById("ans-4");
const ans = document.getElementById("answer-btns");


const question = async () => {
  let fetchdata = await fetch(URL);
  let data = await fetchdata.json();
  console.log(data);

  ques.innerHTML = data.results[0].question;

ans1.innerHTML = data.results[0].incorrect_answers[0];
ans2.innerHTML = data.results[0].incorrect_answers[1];
ans3.innerHTML = data.results[0].incorrect_answers[2];
ans4.innerHTML = data.results[0].correct_answer;




};

question();

