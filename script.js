// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

const qrEl = document.getElementById("qrBox");
const qrImg = document.getElementById("qrImg");
const qrText = document.getElementById("qrText");
const btn = document.getElementById("btn");

const generateQR = () => {
  qrImg.src = `
    https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}
    `;
};

btn.addEventListener("click", generateQR);
