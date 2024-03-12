const adviceId = document.getElementById("advice-id");
const adviceContent = document.getElementById("advice-content");
const adviceButton = document.getElementById("button");
const spinner = document.getElementById("spinner");

const getAdvice = async () => {
  adviceContent.innerHTML = `<div id="spinner" class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`;
  spinner.style = "display: block;";

  const response = await fetch("https://api.adviceslip.com/advice", {
    method: "GET",
  });

  const advice = await response.json();

  spinner.style = "display: none;";

  const id = advice["slip"]["id"];
  const content = advice["slip"]["advice"];

  adviceId.innerText = `Advice #${id}`;
  adviceContent.innerHTML = `"${content}"`;

  return advice;
};

getAdvice();

adviceButton.addEventListener("click", getAdvice);
