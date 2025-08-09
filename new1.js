// // ---------- NỀN KÝ TỰ RƠI ----------
// const canvasMatrix = document.getElementById('matrix');
// const ctxMatrix = canvasMatrix.getContext('2d');

// canvasMatrix.height = window.innerHeight;
// canvasMatrix.width = window.innerWidth;

// const katakana = 'アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヴンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// const chars = katakana.split('');
// const fontSize = 18;
// const columns = canvasMatrix.width / fontSize;
// const drops = Array(Math.floor(columns)).fill(1);

// function drawMatrix() {
//   ctxMatrix.fillStyle = 'rgba(0, 0, 0, 0.05)';
//   ctxMatrix.fillRect(0, 0, canvasMatrix.width, canvasMatrix.height);

//   ctxMatrix.font = fontSize + 'px monospace';

//   drops.forEach((y, x) => {
//     ctxMatrix.fillStyle = Math.random() > 0.5 ? '#ff0000' : '#00bfff';
//     const text = chars[Math.floor(Math.random() * chars.length)];
//     ctxMatrix.fillText(text, x * fontSize, y * fontSize);

//     if (y * fontSize > canvasMatrix.height && Math.random() > 0.975) {
//       drops[x] = 0;
//     }
//     drops[x]++;
//   });
// }
// setInterval(drawMatrix, 33);

// // ---------- COUNTDOWN KÝ TỰ ----------
// const canvasCountdown = document.getElementById('countdown');
// const ctxCountdown = canvasCountdown.getContext('2d');
// canvasCountdown.width = window.innerWidth;
// canvasCountdown.height = window.innerHeight;

// const numbers = ['3', '2', '1'];
// let currentIndex = 0;

// function drawNumberAsChars(number) {
//   ctxCountdown.clearRect(0, 0, canvasCountdown.width, canvasCountdown.height);

//   const tempCanvas = document.createElement('canvas');
//   const tempCtx = tempCanvas.getContext('2d');
//   tempCanvas.width = 300;
//   tempCanvas.height = 300;

//   tempCtx.fillStyle = '#fff';
//   tempCtx.font = 'bold 250px monospace';
//   tempCtx.textAlign = 'center';
//   tempCtx.textBaseline = 'middle';
//   tempCtx.fillText(number, tempCanvas.width / 2, tempCanvas.height / 2);

//   const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
//   const particles = [];

//   for (let y = 0; y < tempCanvas.height; y += 5) {
//     for (let x = 0; x < tempCanvas.width; x += 5) {
//       const index = (y * tempCanvas.width + x) * 4;
//       if (imageData.data[index + 3] > 128) {
//         const char = chars[Math.floor(Math.random() * chars.length)];
//         particles.push({ x, y, char });
//       }
//     }
//   }

//   particles.forEach(p => {
//     ctxCountdown.fillStyle = '#ff4eb8';
//     ctxCountdown.font = '16px monospace';
//     ctxCountdown.fillText(
//       p.char,
//       canvasCountdown.width / 2 - tempCanvas.width / 2 + p.x,
//       canvasCountdown.height / 2 - tempCanvas.height / 2 + p.y
//     );
//   });
// }

// setTimeout(() => {
//   const interval = setInterval(() => {
//     drawNumberAsChars(numbers[currentIndex]);
//     currentIndex++;
//     if (currentIndex >= numbers.length) {
//       clearInterval(interval);
//       setTimeout(() => {
//         ctxCountdown.clearRect(0, 0, canvasCountdown.width, canvasCountdown.height);
//         startQuestionFlow();
//       }, 1000);
//     }
//   }, 1000);
// }, 2000);

// // ---------- PHẦN CÂU HỎI VỚI 2 NÚT CÓ VÀ KHÔNG ----------
// const positiveAnswers = [
//   "Tôi biết mà hihi",
//   "Tôi cũng thích bạn nhiều lắm ❤"
// ];

// const negativeLoop = [
//   "Chắc chắn chứ?",
//   "Suy nghĩ kĩ chưa?",
//   "Suy nghĩ lại đi...",
//   "Năn nỉ mà...",
//   "Hỏi lại nhé, bạn thích tôi không?",
//   "Bạn thích tôi không?"
// ];

// const finalText = `Em à, trong cuộc sống của anh, em như một viên ngọc quý mà nhân duyên đã ban tặng. Mỗi ngày trôi qua, anh càng nhận ra giá trị của em không chỉ nằm ở vẻ đẹp bên ngoài mà còn ở tâm hồn ấm áp và trái tim chân thành. Em là nguồn động lực giúp anh vượt qua những khó khăn, là người bạn đồng hành luôn sẵn sàng lắng nghe và chia sẻ. Những khoảnh khắc bên em, từ những tiếng cười đến những giây phút lặng im, đều trở thành những kỷ niệm quý giá mà anh sẽ trân trọng mãi mãi. Em không chỉ là người anh thương, mà còn là ánh sáng dẫn đường trong cuộc sống của anh. Anh cảm thấy may mắn và biết ơn vì có em bên cạnh, và anh sẽ luôn nỗ lực để bảo vệ và gìn giữ viên ngọc quý này.`;

// let questionState = 'askLike';
// let positiveIndex = 0;
// let negativeIndex = 0;

// function startQuestionFlow() {
//   questionState = 'askLike';
//   positiveIndex = 0;
//   negativeIndex = 0;
//   updateQuestion("Bạn có thích tôi không?");
//   showQuestionBox();

//   const yesBtn = document.getElementById('yesBtn');
//   yesBtn.style.display = 'inline-block';
//   yesBtn.textContent = 'Có';

//   document.getElementById('noBtn').style.display = 'inline-block';
//   document.getElementById('thankBtn').style.display = 'none';

//   document.getElementById('message').textContent = '';
// }

// function updateQuestion(text) {
//   const questionTextElem = document.getElementById('question-text');
//   const message = document.getElementById('message');
//   message.textContent = '';
//   questionTextElem.textContent = text;
// }

// function showQuestionBox() {
//   document.getElementById('question-box').classList.remove('hidden');
// }

// // Hàm hiệu ứng gõ chữ từng kí tự, xuống dòng sau 50 ký tự tại khoảng trắng
// async function typeWriter(text, element) {
//   element.textContent = '';
//   let delay = 50; // tốc độ gõ 50ms

//   for (let i = 0; i < text.length; i++) {
//     element.textContent += text.charAt(i);
//     await new Promise(resolve => setTimeout(resolve, delay));
//   }
// }

// document.getElementById('yesBtn').addEventListener('click', async () => {
//   if (questionState === 'askLike' || questionState === 'negative') {
//     questionState = 'positive';

//     if (positiveIndex === 0) {
//       updateQuestion(positiveAnswers[positiveIndex]);
//       positiveIndex++;
//       document.getElementById('noBtn').style.display = 'none';

//       const yesBtn = document.getElementById('yesBtn');
//       yesBtn.textContent = 'OK';

//       document.getElementById('message').textContent = '';

//     } else if (positiveIndex === 1) {
//       updateQuestion(positiveAnswers[positiveIndex]);
//       positiveIndex++;

//       const yesBtn = document.getElementById('yesBtn');
//       yesBtn.textContent = 'OK';

//       document.getElementById('message').textContent = '';
//     }
//   } else if (questionState === 'positive') {
//     if (positiveIndex < positiveAnswers.length) {
//       updateQuestion(positiveAnswers[positiveIndex]);
//       positiveIndex++;
//       document.getElementById('message').textContent = '';
//     } else {
//       // Ẩn nút OK và ẩn câu hỏi chính
//       const yesBtn = document.getElementById('yesBtn');
//       yesBtn.style.display = 'none';
//       document.getElementById('question-text').textContent = '';

//       const messageElem = document.getElementById('message');
//       messageElem.textContent = '';
//       await typeWriter(finalText, messageElem);

//       // Hiện nút Cảm ơn anh bên dưới đoạn văn, bên góc phải
//       const thankBtn = document.getElementById('thankBtn');
//       thankBtn.style.display = 'inline-block';
//     }
//   }
// });

// document.getElementById('noBtn').addEventListener('click', () => {
//   if (questionState === 'askLike' || questionState === 'negative') {
//     questionState = 'negative';
//     if (negativeIndex >= negativeLoop.length) negativeIndex = 0;
//     updateQuestion(negativeLoop[negativeIndex]);
//     negativeIndex++;
//     document.getElementById('yesBtn').style.display = 'inline-block';
//     document.getElementById('noBtn').style.display = 'inline-block';
//   }
// });

// // Xử lý khi click nút Cảm ơn anh
// document.getElementById('thankBtn').addEventListener('click', () => {
//   const thankBtn = document.getElementById('thankBtn');
//   thankBtn.style.display = 'none';

//   // Ẩn hết phần trước
//   document.getElementById('message').textContent = '';
//   document.getElementById('question-text').textContent = '';
//   document.getElementById('yesBtn').style.display = 'none';
//   document.getElementById('noBtn').style.display = 'none';

//   const questionBox = document.getElementById('question-box');
//   questionBox.innerHTML = '';

//   // Tạo div mới hiển thị lời cảm ơn
//   const thankMessage = document.createElement('div');
//   thankMessage.textContent = 'Anh yêu em! 💖';
//   thankMessage.style.color = '#ff4eb8';
//   thankMessage.style.fontSize = '32px';
//   thankMessage.style.fontWeight = 'bold';
//   thankMessage.style.fontFamily = 'monospace';
//   thankMessage.style.textAlign = 'center';
//   thankMessage.style.whiteSpace = 'nowrap';
//   thankMessage.style.marginTop = '100px';
//   thankMessage.style.textShadow =
//     '0 0 5px #ff4eb8, 0 0 10px #ff4eb8, 0 0 20px #ff4eb8, 0 0 30px #ff4eb8';

//   questionBox.appendChild(thankMessage);
//   questionBox.classList.remove('hidden');
// });







// if (screen.orientation && screen.orientation.lock) {
//   screen.orientation.lock("landscape").catch(function(error) {
//     console.log("Không thể khóa màn hình:", error);
//   });
// }









































// ---------- NỀN KÝ TỰ RƠI ----------
const canvasMatrix = document.getElementById('matrix');
const ctxMatrix = canvasMatrix.getContext('2d');

function resizeMatrix() {
  canvasMatrix.height = window.innerHeight;
  canvasMatrix.width = window.innerWidth;
  columns = Math.floor(canvasMatrix.width / fontSize);
  drops = Array(columns).fill(1);
}
canvasMatrix.height = window.innerHeight;
canvasMatrix.width = window.innerWidth;

const katakana = 'アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヴンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const chars = katakana.split('');
const fontSize = 18;
let columns = canvasMatrix.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctxMatrix.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctxMatrix.fillRect(0, 0, canvasMatrix.width, canvasMatrix.height);

  ctxMatrix.font = fontSize + 'px monospace';

  drops.forEach((y, x) => {
    ctxMatrix.fillStyle = Math.random() > 0.5 ? '#ff0000' : '#00bfff';
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctxMatrix.fillText(text, x * fontSize, y * fontSize);

    if (y * fontSize > canvasMatrix.height && Math.random() > 0.975) {
      drops[x] = 0;
    }
    drops[x]++;
  });
}
setInterval(drawMatrix, 33);

// Lắng nghe thay đổi kích thước (mobile + desktop)
window.addEventListener('resize', resizeMatrix);


// ---------- COUNTDOWN KÝ TỰ ----------
const canvasCountdown = document.getElementById('countdown');
const ctxCountdown = canvasCountdown.getContext('2d');
canvasCountdown.width = window.innerWidth;
canvasCountdown.height = window.innerHeight;

const numbers = ['3', '2', '1'];
let currentIndex = 0;

function drawNumberAsChars(number) {
  ctxCountdown.clearRect(0, 0, canvasCountdown.width, canvasCountdown.height);

  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');
  tempCanvas.width = 300;
  tempCanvas.height = 300;

  tempCtx.fillStyle = '#fff';
  tempCtx.font = 'bold 250px monospace';
  tempCtx.textAlign = 'center';
  tempCtx.textBaseline = 'middle';
  tempCtx.fillText(number, tempCanvas.width / 2, tempCanvas.height / 2);

  const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
  const particles = [];

  for (let y = 0; y < tempCanvas.height; y += 5) {
    for (let x = 0; x < tempCanvas.width; x += 5) {
      const index = (y * tempCanvas.width + x) * 4;
      if (imageData.data[index + 3] > 128) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        particles.push({ x, y, char });
      }
    }
  }

  particles.forEach(p => {
    ctxCountdown.fillStyle = '#ff4eb8';
    ctxCountdown.font = '16px monospace';
    ctxCountdown.fillText(
      p.char,
      canvasCountdown.width / 2 - tempCanvas.width / 2 + p.x,
      canvasCountdown.height / 2 - tempCanvas.height / 2 + p.y
    );
  });
}

setTimeout(() => {
  const interval = setInterval(() => {
    drawNumberAsChars(numbers[currentIndex]);
    currentIndex++;
    if (currentIndex >= numbers.length) {
      clearInterval(interval);
      setTimeout(() => {
        ctxCountdown.clearRect(0, 0, canvasCountdown.width, canvasCountdown.height);
        startQuestionFlow();
      }, 1000);
    }
  }, 1000);
}, 2000);

// ---------- PHẦN CÂU HỎI VỚI 2 NÚT CÓ VÀ KHÔNG ----------
const positiveAnswers = [
  "Tôi biết mà hihi",
  "Tôi cũng thích bạn nhiều lắm ❤"
];

const negativeLoop = [
  "Chắc chắn chứ?",
  "Suy nghĩ kĩ chưa?",
  "Suy nghĩ lại đi...",
  "Năn nỉ mà...",
  "Hỏi lại nhé, bạn thích tôi không?",
  "Bạn thích tôi không?"
];

const finalText = `Em à, trong cuộc sống của anh, em như một viên ngọc quý mà nhân duyên đã ban tặng. Mỗi ngày trôi qua, anh càng nhận ra giá trị của em không chỉ nằm ở vẻ đẹp bên ngoài mà còn ở tâm hồn ấm áp và trái tim chân thành. Em là nguồn động lực giúp anh vượt qua những khó khăn, là người bạn đồng hành luôn sẵn sàng lắng nghe và chia sẻ. Những khoảnh khắc bên em, từ những tiếng cười đến những giây phút lặng im, đều trở thành những kỷ niệm quý giá mà anh sẽ trân trọng mãi mãi. Em không chỉ là người anh thương, mà còn là ánh sáng dẫn đường trong cuộc sống của anh. Anh cảm thấy may mắn và biết ơn vì có em bên cạnh, và anh sẽ luôn nỗ lực để bảo vệ và gìn giữ viên ngọc quý này.`;

let questionState = 'askLike';
let positiveIndex = 0;
let negativeIndex = 0;

function startQuestionFlow() {
  questionState = 'askLike';
  positiveIndex = 0;
  negativeIndex = 0;
  updateQuestion("Bạn có thích tôi không?");
  showQuestionBox();

  const yesBtn = document.getElementById('yesBtn');
  yesBtn.style.display = 'inline-block';
  yesBtn.textContent = 'Có';

  document.getElementById('noBtn').style.display = 'inline-block';
  document.getElementById('thankBtn').style.display = 'none';

  document.getElementById('message').textContent = '';
}

function updateQuestion(text) {
  const questionTextElem = document.getElementById('question-text');
  const message = document.getElementById('message');
  message.textContent = '';
  questionTextElem.textContent = text;
}

function showQuestionBox() {
  document.getElementById('question-box').classList.remove('hidden');
}

// Hàm hiệu ứng gõ chữ từng kí tự
async function typeWriter(text, element) {
  element.textContent = '';
  let delay = 50;
  for (let i = 0; i < text.length; i++) {
    element.textContent += text.charAt(i);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
}

document.getElementById('yesBtn').addEventListener('click', async () => {
  if (questionState === 'askLike' || questionState === 'negative') {
    questionState = 'positive';
    if (positiveIndex === 0) {
      updateQuestion(positiveAnswers[positiveIndex]);
      positiveIndex++;
      document.getElementById('noBtn').style.display = 'none';
      document.getElementById('yesBtn').textContent = 'OK';
      document.getElementById('message').textContent = '';
    } else if (positiveIndex === 1) {
      updateQuestion(positiveAnswers[positiveIndex]);
      positiveIndex++;
      document.getElementById('yesBtn').textContent = 'OK';
      document.getElementById('message').textContent = '';
    }
  } else if (questionState === 'positive') {
    if (positiveIndex < positiveAnswers.length) {
      updateQuestion(positiveAnswers[positiveIndex]);
      positiveIndex++;
      document.getElementById('message').textContent = '';
    } else {
      document.getElementById('yesBtn').style.display = 'none';
      document.getElementById('question-text').textContent = '';
      const messageElem = document.getElementById('message');
      messageElem.textContent = '';
      await typeWriter(finalText, messageElem);
      const thankBtn = document.getElementById('thankBtn');
      thankBtn.style.display = 'inline-block';
    }
  }
});

document.getElementById('noBtn').addEventListener('click', () => {
  if (questionState === 'askLike' || questionState === 'negative') {
    questionState = 'negative';
    if (negativeIndex >= negativeLoop.length) negativeIndex = 0;
    updateQuestion(negativeLoop[negativeIndex]);
    negativeIndex++;
    document.getElementById('yesBtn').style.display = 'inline-block';
    document.getElementById('noBtn').style.display = 'inline-block';
  }
});

document.getElementById('thankBtn').addEventListener('click', () => {
  document.getElementById('thankBtn').style.display = 'none';
  document.getElementById('message').textContent = '';
  document.getElementById('question-text').textContent = '';
  document.getElementById('yesBtn').style.display = 'none';
  document.getElementById('noBtn').style.display = 'none';
  const questionBox = document.getElementById('question-box');
  questionBox.innerHTML = '';
  const thankMessage = document.createElement('div');
  thankMessage.textContent = 'Anh yêu em! 💖';
  thankMessage.style.color = '#ff4eb8';
  thankMessage.style.fontSize = '32px';
  thankMessage.style.fontWeight = 'bold';
  thankMessage.style.fontFamily = 'monospace';
  thankMessage.style.textAlign = 'center';
  thankMessage.style.whiteSpace = 'nowrap';
  thankMessage.style.marginTop = '100px';
  thankMessage.style.textShadow =
    '0 0 5px #ff4eb8, 0 0 10px #ff4eb8, 0 0 20px #ff4eb8, 0 0 30px #ff4eb8';
  questionBox.appendChild(thankMessage);
  questionBox.classList.remove('hidden');
});

// ---------- KHÓA XOAY MÀN HÌNH ----------
if (screen.orientation && screen.orientation.lock) {
  screen.orientation.lock("landscape").catch(function(error) {
    console.log("Không thể khóa màn hình:", error);
  });
}
