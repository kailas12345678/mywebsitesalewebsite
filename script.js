// Insert a snippet here to display on code.html
const codeSnippet = ``; // Add your code between the backticks

const codeBox = document.getElementById('code-box');
if (codeBox && codeSnippet.trim() !== '') {
  codeBox.textContent = codeSnippet;
}
