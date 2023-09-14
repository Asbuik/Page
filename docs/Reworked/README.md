# Matrix Slider Example

<div id="text-container"></div>
<input id="slider" type="range" min="0" max="100" style="width: 100%;">

<script>
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector("#slider");
    const textContainer = document.querySelector("#text-container");

    const text1 = "Welcome to Valid Thought";
    const text2 = "Hi there fellas! Wassup?";
    const maxLength = Math.max(text1.length, text2.length);

    // Fill in the container with spans for each character
    for (let i = 0; i < maxLength; i++) {
        const span = document.createElement("span");
        span.textContent = text1[i] || " ";
        textContainer.appendChild(span);
    }

    slider.addEventListener('input', function(e) {
        const index = Math.floor(e.target.value / 100 * maxLength);
        const textContainerSpans = textContainer.querySelectorAll("span");
        
        textContainerSpans.forEach((span, i) => {
            span.textContent = i < index ? (text2[i] || ' ') : (text1[i] || ' ');
            
            // add or remove highlight class
            if (i === index) {
                span.classList.add('highlight');
            } else {
                span.classList.remove('highlight');
            }
        });
    });
});
</script>

<style>
#text-container span {
    transition: color 0.3s, transform 0.3s;
    display: inline-block;
}

#text-container span.highlight {
    color: lime;
    transform: scale(1.5);
}
</style>
