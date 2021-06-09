const textEl = document.getElementById("qrdata");
const qrcodeform = document.getElementById("qrcodeform");
const qrcodeContainer = document.querySelector(".qrcode__output");

const genarate = (data) => {
  const typeNumber = 0;
  const errorCorrectionLevel = "L";
  const qr = qrcode(typeNumber, errorCorrectionLevel);
  try {
    qr.addData(data);
    qr.make();
    qrcodeContainer.innerHTML = qr.createImgTag();
  } catch (error) {
    qrcodeContainer.innerHTML = JSON.stringify(error);
  }
};

qrcodeform.onsubmit = (e) => {
  e.preventDefault();
  const dataToGen = textEl.value.trim() || undefined;

  if (!dataToGen) return;

  genarate(dataToGen);
};

qrcodeContainer.onclick = (e) => {
  const imgData = e.target["src"];
  openInNewTab(imgData);
};

const openInNewTab = (url) => {
  if (!url.trim()) return;

  window.open(url, "_blank");
};
