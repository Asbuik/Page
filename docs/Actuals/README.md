# Slider Text Transition Example

<div id="container" style="height: 500px;">
</div>

<div style="clear:both;">
    <input id="slider" type="range" min="0" max="100" step="1" value="0" style="width: 100%;">
</div>

<script>
// get the elements
const slider = document.getElementById('slider');
const container = document.getElementById('container');

// Array of text options
const textOptions = [
"Welcome to Valid Thought\n\nWe are committed to fostering transparency in digital transformation.\n\nOur primary objective is to foster open and genuine interactions between every individual and any form of authority. We believe in leveraging the power of mutual cooperation to promote a more inclusive world.\n\nBy harnessing advanced text and language transformation technologies, we aspire to build the world's first entirely inclusive AI system. This system is designed to be easily verifiable by both the user and the host, thereby creating a unique blend of transparency in the input, the processing, and the output.\n\nOur mission is to develop a system that is not only transparent but also accountable and accessible, embodying a new paradigm in the realm of artificial intelligence. Join us in our endeavor to make technology more inclusive, understandable, and beneficial to all.",
"Welcome to Valid Thought :earth_americas:\n\nWe're all about making the digital world clear and open to everyone. :bulb:\n\nOur big aim :dart: is to help everyone talk honestly with people in charge :speaking_head:. We want to work together :handshake: to make our world include everyone :globe_with_meridians:.\n\nBy using smart tech :desktop_computer: that changes text and language :abcd:, we're trying to build a computer system :computer: that everyone can use :raised_hands:. This system is designed to be easy to check :white_check_mark: and understand :brain:, whether you're the one using it :bust_in_silhouette: or the one running it :busts_in_silhouette:.\n\nWe're set on creating a system that's open :unlock:, responsible :balance_scale:, and easy to use for everyone :people_holding_hands:. This is a new way :new: of doing things in the world of computer learning :robot:. Come join us :hand: as we work to make tech understandable :book: and useful :wrench: for all, no matter who you are :heart:."
];

// split the texts into lines
const lines = textOptions.map(text => text.split('\n'));

// find the longest line
const maxLength = Math.max(...lines.flatMap(line => line.map(characters => characters.length)));

// pad all lines to the maximum length
lines.forEach((line, i) => {
    line.forEach((characters, j) => {
        while (characters.length < maxLength) {
            characters += ' ';
        }
        lines[i][j] = characters;
    });
});

// create an array of transition lines
const transitionLines = lines[0].map((characters, i) => {
    const span = document.createElement('span');
    span.textContent = characters;
    container.appendChild(span);
    return span;
});

// change event for the slider
slider.oninput = function() {
    // calculate the transition index
    const transitionIndex = Math.floor(this.value * maxLength / 100);

    // update the transition lines
    transitionLines.forEach((span, i) => {
        const oldCharacters = lines[0][i];
        const newCharacters = lines[1][i];
        const transitionCharacters = oldCharacters.substring(0, transitionIndex) + newCharacters.substring(transitionIndex);
        span.textContent = transitionCharacters;
    });
};
</script>

<style>
#container span {
    display: block;
    white-space: pre;
    transition: color 0.5s;
}
#container span.changed {
    color: green;
}
</style>
