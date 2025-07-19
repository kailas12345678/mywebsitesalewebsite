// Insert a snippet here to display on code.html
const codeSnippet = ``; // Add your code between the backticks

const codeBox = document.getElementById('code-box');
if (codeBox && codeSnippet.trim() !== '') {
  codeBox.textContent = codeSnippet;
}
const embeddedCode = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8f9fa;
      color: #333;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Hello from inside the iframe!</h1>
  <p>This is another mini website injected into your main site.</p>
  <script>
    console.log('This script is running inside the iframe.');
  </script>
</body>
</html>
`;

window.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('codeRunner');
  iframe.srcdoc = embeddedCode;
});
