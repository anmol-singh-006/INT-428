// Color palettes
const colorPalettes = {
  modern: [
    { primary: "#2d3436", accent: "#00b894", text: "#2d3436" },
    { primary: "#6c5ce7", accent: "#a8a4e6", text: "#ffffff" },
    { primary: "#0984e3", accent: "#74b9ff", text: "#2d3436" },
    { primary: "#00cec9", accent: "#81ecec", text: "#2d3436" },
    { primary: "#fd79a8", accent: "#fab1c9", text: "#2d3436" },
  ],
  corporate: [
    { primary: "#1e3799", accent: "#4a69bd", text: "#ffffff" },
    { primary: "#2c3e50", accent: "#3498db", text: "#ffffff" },
    { primary: "#34495e", accent: "#2980b9", text: "#ffffff" },
    { primary: "#2f3640", accent: "#487eb0", text: "#ffffff" },
    { primary: "#273c75", accent: "#40739e", text: "#ffffff" },
  ],
  creative: [
    { primary: "#e84393", accent: "#fd79a8", text: "#ffffff" },
    { primary: "#e056fd", accent: "#be2edd", text: "#ffffff" },
    { primary: "#a8e6cf", accent: "#3d84a8", text: "#2d3436" },
    { primary: "#ff9ff3", accent: "#f368e0", text: "#2d3436" },
    { primary: "#ffeaa7", accent: "#fdcb6e", text: "#2d3436" },
  ],
  minimal: [
    { primary: "#ffffff", accent: "#2d3436", text: "#2d3436" },
    { primary: "#f5f6fa", accent: "#2f3640", text: "#2d3436" },
    { primary: "#dfe6e9", accent: "#636e72", text: "#2d3436" },
    { primary: "#f1f2f6", accent: "#2f3542", text: "#2d3436" },
    { primary: "#f5f6fa", accent: "#353b48", text: "#2d3436" },
  ],
  tech: [
    { primary: "#000000", accent: "#00ff00", text: "#ffffff" },
    { primary: "#1a1a1a", accent: "#00ffff", text: "#ffffff" },
    { primary: "#2d2d2d", accent: "#ff3e00", text: "#ffffff" },
    { primary: "#161616", accent: "#61dafb", text: "#ffffff" },
    { primary: "#0a192f", accent: "#64ffda", text: "#ffffff" },
  ],
  traditional: [
    { primary: "#8b4513", accent: "#deb887", text: "#ffffff" },
    { primary: "#800020", accent: "#ffd700", text: "#ffffff" },
    { primary: "#2f4f4f", accent: "#bc8f8f", text: "#ffffff" },
    { primary: "#191970", accent: "#b8860b", text: "#ffffff" },
    { primary: "#006400", accent: "#daa520", text: "#ffffff" },
  ],
  spicy: [
    { primary: "#ff0000", accent: "#ffff00", text: "#ffffff" },
    { primary: "#ff4d00", accent: "#ff00ff", text: "#ffffff" },
    { primary: "#ff6b00", accent: "#00ffff", text: "#ffffff" },
    { primary: "#ff1493", accent: "#ff69b4", text: "#ffffff" },
    { primary: "#ff8c00", accent: "#ff4500", text: "#ffffff" },
  ],
  luxury: [
    { primary: "#000000", accent: "#ffd700", text: "#ffffff" },
    { primary: "#2c3e50", accent: "#f1c40f", text: "#ffffff" },
    { primary: "#800020", accent: "#ffd700", text: "#ffffff" },
    { primary: "#4a4a4a", accent: "#c0c0c0", text: "#ffffff" },
    { primary: "#1a1a1a", accent: "#d4af37", text: "#ffffff" },
  ],
  nature: [
    { primary: "#228b22", accent: "#90ee90", text: "#ffffff" },
    { primary: "#20b2aa", accent: "#98ff98", text: "#ffffff" },
    { primary: "#8fbc8f", accent: "#556b2f", text: "#ffffff" },
    { primary: "#3cb371", accent: "#f0fff0", text: "#2d3436" },
    { primary: "#6b8e23", accent: "#98fb98", text: "#ffffff" },
  ],
  retro: [
    { primary: "#ff6b6b", accent: "#4ecdc4", text: "#ffffff" },
    { primary: "#ffe66d", accent: "#ff6b6b", text: "#2d3436" },
    { primary: "#96ceb4", accent: "#ffeead", text: "#2d3436" },
    { primary: "#d4a5a5", accent: "#9me9e9", text: "#2d3436" },
    { primary: "#ffcc5c", accent: "#ff6f69", text: "#2d3436" },
  ],
};

// Font combinations
const fontPairs = [
  { title: "'Helvetica Neue', sans-serif", body: "'Arial', sans-serif" },
  { title: "'Montserrat', sans-serif", body: "'Open Sans', sans-serif" },
  { title: "'Playfair Display', serif", body: "'Lato', sans-serif" },
  { title: "'Roboto', sans-serif", body: "'Roboto', sans-serif" },
  { title: "'Poppins', sans-serif", body: "'Poppins', sans-serif" },
  { title: "'Inter', sans-serif", body: "'Inter', sans-serif" },
  { title: "'DM Sans', sans-serif", body: "'DM Sans', sans-serif" },
  { title: "'Work Sans', sans-serif", body: "'Work Sans', sans-serif" },
  {
    title: "'Source Sans Pro', sans-serif",
    body: "'Source Sans Pro', sans-serif",
  },
  { title: "'SF Pro Display', sans-serif", body: "'SF Pro Text', sans-serif" },
  { title: "'Fira Code', monospace", body: "'Fira Sans', sans-serif" },
  { title: "'Space Mono', monospace", body: "'Space Grotesk', sans-serif" },
  { title: "'Merriweather', serif", body: "'Source Sans Pro', sans-serif" },
  { title: "'Abril Fatface', cursive", body: "'Lato', sans-serif" },
  { title: "'Oswald', sans-serif", body: "'Open Sans', sans-serif" },
];

// Background patterns
const backgroundPatterns = [
  "linear-gradient(135deg, {color1} 0%, {color2} 100%)",
  "linear-gradient(45deg, {color1} 0%, {color2} 100%)",
  "linear-gradient(to right, {color1} 0%, {color2} 100%)",
  "linear-gradient(to bottom right, {color1} 0%, {color2} 100%)",
  "{color1}",
  "repeating-linear-gradient(45deg, {color1}, {color1} 10px, {color2} 10px, {color2} 20px)",
  "radial-gradient(circle at top right, {color2}, {color1})",
  "linear-gradient(120deg, {color1} 0%, {color2} 100%)",
  "linear-gradient(to top left, {color1}, {color2})",
  "linear-gradient(to right, {color1}, {color1} 50%, {color2} 50%, {color2})",
  "repeating-linear-gradient(-45deg, {color1}, {color1} 5px, {color2} 5px, {color2} 10px)",
  "radial-gradient(circle at bottom left, {color2}, {color1})",
  "linear-gradient(90deg, {color1} 0%, {color2} 50%, {color1} 100%)",
  "repeating-radial-gradient(circle at 50% 50%, {color2} 0, {color2} 10px, {color1} 10px, {color1} 20px)",
  "conic-gradient(from 0deg at 50% 50%, {color1}, {color2}, {color1})",
];

// Border styles
const borderStyles = [
  { radius: "0px", shadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
  { radius: "5px", shadow: "0 8px 16px rgba(0, 0, 0, 0.1)" },
  { radius: "10px", shadow: "0 12px 24px rgba(0, 0, 0, 0.1)" },
  { radius: "15px", shadow: "0 16px 32px rgba(0, 0, 0, 0.1)" },
  { radius: "20px", shadow: "0 20px 40px rgba(0, 0, 0, 0.1)" },
  { radius: "25px", shadow: "0 24px 48px rgba(0, 0, 0, 0.1)" },
  { radius: "30px", shadow: "0 28px 56px rgba(0, 0, 0, 0.1)" },
];

// Layout variations
const layouts = ["left"];

// Function to generate a unique design
function generateDesign(id, category, style) {
  const palette =
    colorPalettes[category][
      Math.floor(Math.random() * colorPalettes[category].length)
    ];
  const fonts = fontPairs[Math.floor(Math.random() * fontPairs.length)];
  const pattern = backgroundPatterns[
    Math.floor(Math.random() * backgroundPatterns.length)
  ]
    .replace("{color1}", style.color1 || palette.primary)
    .replace("{color2}", style.color2 || palette.accent);
  const border = borderStyles[Math.floor(Math.random() * borderStyles.length)];

  return {
    id,
    name: `${style.prefix} ${id}`,
    keywords: [...style.keywords, category],
    style: {
      background: pattern,
      borderRadius: border.radius,
      shadow: border.shadow,
      fontFamily: fonts.title,
      layout: "left",
      textColor: style.textColor || palette.text,
      accentColor: palette.accent,
      nameStyle: {
        fontSize: style.nameSize || "28px",
        fontWeight: style.nameBold ? "700" : "600",
        color: style.nameColor || palette.text,
      },
    },
  };
}

// Generate 2000 designs
const cardTemplates = [];
let id = 1;

// Modern designs (500)
for (let i = 0; i < 500; i++) {
  cardTemplates.push(
    generateDesign(id++, "modern", {
      prefix: "Modern",
      keywords: ["modern", "clean", "professional", "sleek"],
      nameSize: "26px",
      nameBold: false,
    })
  );
}

// Corporate designs (500)
for (let i = 0; i < 500; i++) {
  cardTemplates.push(
    generateDesign(id++, "corporate", {
      prefix: "Corporate",
      keywords: ["corporate", "business", "professional", "formal"],
      nameSize: "24px",
      nameBold: true,
    })
  );
}

// Creative designs (500)
for (let i = 0; i < 500; i++) {
  cardTemplates.push(
    generateDesign(id++, "creative", {
      prefix: "Creative",
      keywords: ["creative", "artistic", "bold", "unique"],
      nameSize: "30px",
      nameBold: true,
    })
  );
}

// Minimal designs (500)
for (let i = 0; i < 500; i++) {
  cardTemplates.push(
    generateDesign(id++, "minimal", {
      prefix: "Minimal",
      keywords: ["minimal", "simple", "clean", "elegant"],
      nameSize: "24px",
      nameBold: false,
    })
  );
}

// Tech designs (300)
for (let i = 0; i < 300; i++) {
  cardTemplates.push(
    generateDesign(id++, "tech", {
      prefix: "Tech",
      keywords: ["tech", "digital", "startup", "innovative", "developer"],
      nameSize: "24px",
      nameBold: true,
      color1: "#000000",
      color2: "#00ff00",
    })
  );
}

// Traditional designs (300)
for (let i = 0; i < 300; i++) {
  cardTemplates.push(
    generateDesign(id++, "traditional", {
      prefix: "Traditional",
      keywords: [
        "traditional",
        "classic",
        "elegant",
        "timeless",
        "sophisticated",
      ],
      nameSize: "26px",
      nameBold: true,
    })
  );
}

// Spicy designs (300)
for (let i = 0; i < 300; i++) {
  cardTemplates.push(
    generateDesign(id++, "spicy", {
      prefix: "Spicy",
      keywords: ["spicy", "bold", "vibrant", "energetic", "dynamic"],
      nameSize: "32px",
      nameBold: true,
    })
  );
}

// Luxury designs (300)
for (let i = 0; i < 300; i++) {
  cardTemplates.push(
    generateDesign(id++, "luxury", {
      prefix: "Luxury",
      keywords: ["luxury", "premium", "exclusive", "elegant", "high-end"],
      nameSize: "28px",
      nameBold: true,
    })
  );
}

// Nature designs (300)
for (let i = 0; i < 300; i++) {
  cardTemplates.push(
    generateDesign(id++, "nature", {
      prefix: "Nature",
      keywords: ["nature", "organic", "eco", "sustainable", "fresh"],
      nameSize: "26px",
      nameBold: false,
    })
  );
}

// Retro designs (300)
for (let i = 0; i < 300; i++) {
  cardTemplates.push(
    generateDesign(id++, "retro", {
      prefix: "Retro",
      keywords: ["retro", "vintage", "nostalgic", "classic", "old-school"],
      nameSize: "28px",
      nameBold: true,
    })
  );
}

// Function to find matching designs based on keywords
function findMatchingDesigns(prompt) {
  const keywords = prompt.toLowerCase().split(/\s+/);

  // Score each template based on matching keywords
  const scoredTemplates = cardTemplates.map((template) => {
    const score = template.keywords.reduce((count, keyword) => {
      return count + (keywords.some((k) => keyword.includes(k)) ? 1 : 0);
    }, 0);
    return { ...template, score };
  });

  // Sort by score (highest first) and filter out non-matching templates
  return scoredTemplates
    .filter((template) => template.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ score, ...template }) => template);
}

// Make the functions available globally
window.findMatchingDesigns = findMatchingDesigns;
window.cardTemplates = cardTemplates;
