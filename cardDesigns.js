const cardDesigns = [
  {
    id: 1,
    name: "Modern Minimalist",
    keywords: ["minimal", "clean", "modern", "simple", "tech", "startup"],
    style: {
      background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
      fontFamily: "'Poppins', sans-serif",
      nameStyle: {
        fontSize: "24px",
        fontWeight: "600",
        color: "#2d3436",
      },
      layout: "left-aligned",
      accentColor: "#007bff",
      textColor: "#2d3436",
      borderRadius: "10px",
      shadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  },
  {
    id: 2,
    name: "Creative Bold",
    keywords: ["creative", "bold", "artistic", "design", "colorful", "vibrant"],
    style: {
      background: "linear-gradient(45deg, #6c5ce7, #a8a4e6)",
      fontFamily: "'Montserrat', sans-serif",
      nameStyle: {
        fontSize: "28px",
        fontWeight: "700",
        color: "#ffffff",
      },
      layout: "centered",
      accentColor: "#ffeaa7",
      textColor: "#ffffff",
      borderRadius: "15px",
      shadow: "0 6px 12px rgba(108, 92, 231, 0.3)",
    },
  },
  {
    id: 3,
    name: "Corporate Professional",
    keywords: [
      "corporate",
      "professional",
      "business",
      "executive",
      "formal",
      "traditional",
    ],
    style: {
      background: "#ffffff",
      fontFamily: "'Times New Roman', serif",
      nameStyle: {
        fontSize: "22px",
        fontWeight: "600",
        color: "#1e3799",
      },
      layout: "centered",
      accentColor: "#1e3799",
      textColor: "#2f3640",
      borderRadius: "5px",
      shadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
    },
  },
  // Note: This is just a sample of 3 designs. In practice, this file would contain 500 different designs
  // Each with unique combinations of styles, colors, and layouts
];

// Function to find matching designs based on prompt
function findMatchingDesigns(prompt) {
  const promptWords = prompt.toLowerCase().split(" ");

  // Calculate match scores for each design
  const matchScores = cardDesigns.map((design) => {
    let score = 0;
    promptWords.forEach((word) => {
      design.keywords.forEach((keyword) => {
        if (keyword.includes(word) || word.includes(keyword)) {
          score += 1;
        }
      });
    });
    return { design, score };
  });

  // Sort designs by match score
  return matchScores
    .sort((a, b) => b.score - a.score)
    .map((item) => item.design)
    .slice(0, 5); // Return top 5 matches
}

// Function to apply design to card
function applyDesign(design, cardElement) {
  const style = design.style;

  // Apply main card styles
  cardElement.style.background = style.background;
  cardElement.style.fontFamily = style.fontFamily;
  cardElement.style.borderRadius = style.borderRadius;
  cardElement.style.boxShadow = style.shadow;

  // Apply text styles
  const nameElement = cardElement.querySelector(".card-name");
  if (nameElement) {
    nameElement.style.fontSize = style.nameStyle.fontSize;
    nameElement.style.fontWeight = style.nameStyle.fontWeight;
    nameElement.style.color = style.nameStyle.color;
  }

  // Apply layout
  cardElement.style.textAlign = style.layout === "centered" ? "center" : "left";

  // Apply colors
  const textElements = cardElement.querySelectorAll("p");
  textElements.forEach((el) => {
    el.style.color = style.textColor;
  });

  // Apply accent color to company name
  const companyElement = cardElement.querySelector(".card-company");
  if (companyElement) {
    companyElement.style.color = style.accentColor;
  }
}

export { cardDesigns, findMatchingDesigns, applyDesign };
