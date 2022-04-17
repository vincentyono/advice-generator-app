const adviceTitle = document.getElementsByClassName("advice-title")[0];
const adviceContent = document.getElementsByClassName("advice-content")[0];

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adviceTitle.innerHTML = `Advice #${data.slip.id}`;
      adviceContent.innerHTML = `"${data.slip.advice}"`;
    });
};

getAdvice();
