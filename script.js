<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Code Runner Example</title>
  <style>
    #code-box {
      white-space: pre-wrap;
      background: #222;
      color: #eee;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 6px;
      max-height: 150px;
      overflow-y: auto;
      font-family: monospace;
    }
    iframe {
      width: 100%;
      height: 700px;
      border: 2px solid #e63946;
      border-radius: 8px;
    }
  </style>
</head>
<body>

  <h1>Code Snippet Viewer</h1>
  <div id="code-box">Code snippet will appear here if added.</div>

  <h2>Embedded Shoe Store</h2>
  <iframe id="codeRunner" sandbox="allow-scripts allow-same-origin"></iframe>

  <script>
    // Insert a snippet here to display on code.html
    const codeSnippet = `
function buyNow(productName) {
  alert(\`Thanks for choosing \${productName}! Checkout coming soon.\`);
}
    `; // Add your code snippet here

    const codeBox = document.getElementById('code-box');
    if (codeBox && codeSnippet.trim() !== '') {
      codeBox.textContent = codeSnippet.trim();
    }

    const embeddedCode = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Shoe Haven</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', sans-serif; }
  body { background: #f6f6f6; color: #333; padding: 20px; }
  header { text-align: center; padding: 20px; }
  header h1 { font-size: 2.5rem; color: #e63946; }
  .product-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; margin: 30px 0; }
  .product-card { background: white; border-radius: 10px; box-shadow: 0 5px 10px rgba(0,0,0,0.1); padding: 15px; text-align: center; }
  .product-card img { max-width: 100%; border-radius: 8px; }
  .product-card h2 { margin: 10px 0; font-size: 1.2rem; }
  .product-card p { color: #444; margin-bottom: 10px; }
  button { background: #e63946; color: white; padding: 10px 16px; border: none; border-radius: 5px; cursor: pointer; transition: background 0.3s ease; }
  button:hover { background: #d62839; }
  footer { text-align: center; margin-top: 40px; font-size: 0.9rem; color: #777; }
</style>
</head>
<body>
<header>
  <h1>👟 Shoe Haven</h1>
  <p>Your next pair is waiting.</p>
</header>

<main class="product-grid">
  <div class="product-card">
    <img src="https://images.unsplash.com/photo-1606813903094-b4221f7572dc" alt="Running Shoes" />
    <h2>SpeedRunner X</h2>
    <p>$99.99</p>
    <button onclick="buyNow('SpeedRunner X')">Buy Now</button>
  </div>

  <div class="product-card">
    <img src="https://images.unsplash.com/photo-1618354691329-359c8f76c98c" alt="Sneakers" />
    <h2>StreetFlex</h2>
    <p>$89.99</p>
    <button onclick="buyNow('StreetFlex')">Buy Now</button>
  </div>

  <div class="product-card">
    <img src="https://images.unsplash.com/photo-1589187155479-b4c1f3ca9b4d" alt="Sport Shoes" />
    <h2>TrailBlazer</h2>
    <p>$119.99</p>
    <button onclick="buyNow('TrailBlazer')">Buy Now</button>
  </div>
</main>

<footer>
  <p>&copy; 2025 Shoe Haven. All rights reserved.</p>
</footer>

<script>
  function buyNow(productName) {
    alert(\`Thanks for choosing \${productName}! Checkout coming soon.\`);
  }
</script>
</body>
</html>
`;

    window.addEventListener('DOMContentLoaded', () => {
      const iframe = document.getElementById('codeRunner');
      if (iframe) iframe.srcdoc = embeddedCode;
    });
  </script>

</body>
</html>

