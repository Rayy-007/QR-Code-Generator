// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

const qrEl = document.getElementById("qrBox");
const qrImg = document.getElementById("qrImg");
const qrInput = document.getElementById("qrInput");
const btn = document.getElementById("btn");
const qrText = document.getElementById("qrText");

const generateQR = () => {
  if (qrInput.value) {
    qrImg.src = `
    https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}
    `;
    qrEl.classList.add("show-img");
    qrText.innerText = qrInput.value;
    qrInput.value = "";
  } else {
    qrInput.classList.add("error");
    setTimeout(() => {
      qrInput.classList.remove("error");
    }, 2000);
  }
};

btn.addEventListener("click", generateQR);
