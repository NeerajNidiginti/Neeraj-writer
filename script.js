const quotes=[
"Success is built by discipline.",
"Silence also tells stories.",
"Dream. Write. Repeat.",
"Words can travel where people cannot."
];
document.getElementById("quote").textContent =
quotes[Math.floor(Math.random()*quotes.length)];
