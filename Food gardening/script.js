// Sample 5 garden projects
const projects = [
  {
    title: "FoodForward SA – Food Gardens Connect",
    location: "Cape Town",
    description: "Provides food and garden training for over 2,000 people.",
    impact: "Tunnel gardens, community kitchens",
    img:"images/foodforward.jpg"
  },
  {
    title: "Place of Hope Garden – Rise Against Hunger",
    location: "Johannesburg",
    description: "Supplies 9 ECD centers with fresh vegetables.",
    impact: "Children fed, education supported",
    img:"images/placeofhop.jpg"
  },
  {
    title: "Sibanye Eco-Gang",
    location: "Gqeberha",
    description: "Activist-run gardens using reclaimed land.",
    impact: "6 gardens, youth engagement",
    img:"images/sibanye.jpg"
  },
  {
    title: "Cape Flats Township Urban Gardens",
    location: "Cape Town",
    description: "Initiatives like GUFI & Philippi Horticultural Area.",
    impact: "R484M value, 82% food security boost",
    img:"images/capeflats.jpg"
  },
  {
    title: "FTFA & CART",
    location: "National",
    description: "Eco gardens using vertical beds, water reuse",
    impact: "800+ gardens, climate resilience",
    img:"images/ftfa.jpg"
  }
];

function loadProjects() {
  const container = document.getElementById("projectContainer");
  projects.forEach(p => {
    const article = document.createElement("article");
    article.innerHTML = `
      <img src="${p.img}"alt="${p.title}" class = "project-img" />
      <h3>${p.title}</h3>
      <strong>Location:</strong> ${p.location}<br/>
      <p>${p.description}</p>
      <p><em>Impact:</em> ${p.impact}</p>`;
    container.appendChild(article);
  });
}

function calculateYield() {
  const area = parseFloat(document.getElementById("areaInput").value);
  const spacing = parseFloat(document.getElementById("spacingInput").value);
  if (area > 0 && spacing > 0) {
    const numPlants = Math.floor(area / spacing);
    document.getElementById("calcResult").textContent = `You can plant approximately ${numPlants} plants in ${area} m².`;
  } else {
    document.getElementById("calcResult").textContent = "Please enter valid numbers.";
  }
}

window.onload = loadProjects;