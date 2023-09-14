window.addEventListener("DOMContentLoaded", function () {
    const textLeft = document.getElementById("text-left").textContent;
    const textRight = document.getElementById("text-right").textContent;
    const maxLength = Math.max(textLeft.length, textRight.length);
  
    const slider = document.getElementById("slider");
    const transitionText = document.getElementById("transitionText");
  
    const renderTransitionText = () => {
      const index = Math.floor((slider.value / 100) * maxLength);
  
      transitionText.innerHTML = Array.from({ length: maxLength }, (_, i) => {
        const char = i < index ? (textRight[i] || ' ') : (textLeft[i] || ' ');
  
        return `<span class="${i === index ? 'highlight' : ''}">${char}</span>`;
      }).join('');
    };
  
    slider.addEventListener("input", renderTransitionText);
  
    // matrix effect
    const canvas = document.getElementById('matrixCanvas');
    const context = canvas.getContext('2d');
  
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  
    const binary = "01";
    const columns = canvas.width / 2;
  
    const drops = [];
  
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }
  
    function drawMatrix() {
      context.fillStyle = "rgba(0, 0, 0, 0.04)";
      context.fillRect(0, 0, canvas.width, canvas.height);
  
      context.fillStyle = "#0f0";
      context.font = "10px arial";
  
      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];
  
        context.fillText(text, i * 10, drops[i] * 10);
  
        if (drops[i] * 10 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
  
        drops[i]++;
      }
    }
  
    setInterval(drawMatrix, 33);
  
    renderTransitionText();
  });
  