:root {
  --ink: #332f33;
  --muted: #7f7470;
  --bg: #fff8f4;
  --cream: #fffaf6;
  --blue: #8fa5d3;
  --brown: #a96f4f;
  --stroke: rgba(111, 99, 95, 0.14);
  --shadow: 0 24px 70px rgba(91, 73, 61, 0.12);

  font: 16px/1.5 Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--ink);
  background: var(--bg);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  min-width: 1024px;
  min-height: 100vh;
  background:
    radial-gradient(circle at 0 0, rgba(143, 165, 211, 0.2), transparent 32%),
    radial-gradient(circle at 100% 12%, rgba(207, 160, 116, 0.18), transparent 28%),
    var(--bg);
}

#root {
  min-height: 100svh;
}

* {
  box-sizing: border-box;
}

button,
a,
input {
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease,
    background-color 180ms ease;
}

button:hover,
a:hover {
  transform: translateY(-1px);
}
