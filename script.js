const adviceTitle = document.getElementsByClassName("advice-title")[0];
const adviceContent = document.getElementsByClassName("advice-content")[0];
const randomBtn = document.getElementsByClassName("random-btn")[0];

const getAdvice = () => {
  adviceTitle.innerHTML = `Advice #`;
  adviceContent.innerHTML = `<img
  id="loading-spinner"
  src="./images/loading-spinner.gif"
  alt="loading spinner"
/>`;
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adviceTitle.innerHTML = `Advice #${data.slip.id}`;
      adviceContent.innerHTML = `"${data.slip.advice}"`;
    });
};

randomBtn.addEventListener("click", () => {
  getAdvice();
});

getAdvice();
