document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateBtn");
  const downloadBtn = document.getElementById("downloadBtn");
  const businessCard = document.getElementById("businessCard");
  const designPrompt = document.getElementById("designPrompt");
  const generateDesign = document.getElementById("generateDesign");

  // Get all input elements
  const nameInput = document.getElementById("name");
  const titleInput = document.getElementById("title");
  const companyInput = document.getElementById("company");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const websiteInput = document.getElementById("website");
  const qrPositionSelect = document.getElementById("qrPosition");
  const qrCodeElement = document.getElementById("qrCode");

  let currentDesign = null;

  // Function to generate design based on prompt
  function generateDesignFromPrompt(prompt) {
    businessCard.classList.add("loading");

    // Find matching designs
    const matchingDesigns = window.findMatchingDesigns(prompt);

    setTimeout(() => {
      if (matchingDesigns.length > 0) {
        // Get the best matching design
        currentDesign = matchingDesigns[0];
        applyDesign(currentDesign);
      } else {
        // If no matches, use a default modern design
        currentDesign = window.cardTemplates[0];
        applyDesign(currentDesign);
      }

      businessCard.classList.remove("loading");
    }, 800);
  }

  // Function to generate QR code
  function generateQRCode(url) {
    if (!url) return;

    qrCodeElement.innerHTML = "";
    new QRCode(qrCodeElement, {
      text: url,
      width: 100,
      height: 100,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  }

  // Function to update QR code position
  function updateQRCodePosition() {
    qrCodeElement.classList.remove(
      "bottom-right",
      "bottom-left",
      "top-right",
      "top-left"
    );

    const position = qrPositionSelect.value;
    if (position !== "none") {
      qrCodeElement.classList.add(position);
      qrCodeElement.style.display = "block";
    } else {
      qrCodeElement.style.display = "none";
    }
  }

  // Function to apply design
  function applyDesign(design) {
    const style = design.style;

    // Apply base card styles
    Object.assign(businessCard.style, {
      fontFamily: style.fontFamily,
      borderRadius: style.borderRadius,
      boxShadow: style.shadow,
      background: style.background,
      color: style.textColor,
      textAlign: "left",
    });

    // Apply styles to name
    const nameElement = businessCard.querySelector(".card-name");
    if (nameElement) {
      Object.assign(nameElement.style, {
        fontSize: style.nameStyle.fontSize,
        fontWeight: style.nameStyle.fontWeight,
        color: style.nameStyle.color,
        display: "block",
        visibility: "visible",
        opacity: "1",
      });
    }

    // Apply text color to all elements except company
    businessCard.querySelectorAll("p:not(.card-company)").forEach((el) => {
      Object.assign(el.style, {
        color: style.textColor,
        display: "block",
        visibility: "visible",
        opacity: "1",
      });
    });

    // Apply accent color to company name
    const companyElement = businessCard.querySelector(".card-company");
    if (companyElement) {
      Object.assign(companyElement.style, {
        color: style.accentColor,
        display: "block",
        visibility: "visible",
        opacity: "1",
      });
    }

    // Ensure contact info is visible
    const contactInfo = businessCard.querySelector(".contact-info");
    if (contactInfo) {
      Object.assign(contactInfo.style, {
        display: "block",
        visibility: "visible",
        opacity: "1",
      });
    }
  }

  // Function to update the business card
  function updateBusinessCard() {
    // Update card content with input values
    const elements = {
      ".card-name": nameInput.value || "Your Name",
      ".card-title": titleInput.value || "Job Title",
      ".card-company": companyInput.value || "Company Name",
      ".card-email": emailInput.value || "email@example.com",
      ".card-phone": phoneInput.value || "+1 234 567 8900",
    };

    // Update each element
    Object.entries(elements).forEach(([selector, value]) => {
      const element = document.querySelector(selector);
      if (element) {
        element.textContent = value;
        element.style.display = "block";
        element.style.visibility = "visible";
        element.style.opacity = "1";
      }
    });

    // Ensure card content container is visible
    const cardContent = document.querySelector(".card-content");
    if (cardContent) {
      cardContent.style.display = "flex";
      cardContent.style.visibility = "visible";
      cardContent.style.opacity = "1";
    }

    // Handle QR code
    try {
      const websiteUrl = websiteInput.value;
      if (websiteUrl && websiteUrl.trim() !== "") {
        const formattedUrl = websiteUrl.startsWith("http")
          ? websiteUrl
          : `https://${websiteUrl}`;
        generateQRCode(formattedUrl);
        updateQRCodePosition();
      } else {
        qrCodeElement.style.display = "none";
      }
    } catch (error) {
      console.error("Error generating QR code:", error);
    }

    // Apply current design if available
    if (currentDesign) {
      applyDesign(currentDesign);
    }
  }

  // Event listeners
  generateDesign.addEventListener("click", () => {
    const prompt = designPrompt.value.trim();
    if (prompt) {
      generateDesignFromPrompt(prompt);
    }
  });

  designPrompt.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const prompt = designPrompt.value.trim();
      if (prompt) {
        generateDesignFromPrompt(prompt);
      }
    }
  });

  // Event listeners for real-time updates
  [
    nameInput,
    titleInput,
    companyInput,
    emailInput,
    phoneInput,
    websiteInput,
  ].forEach((input) => input.addEventListener("input", updateBusinessCard));

  qrPositionSelect.addEventListener("change", updateBusinessCard);
  generateBtn.addEventListener("click", updateBusinessCard);

  // Download button click handler
  downloadBtn.addEventListener("click", () => {
    html2canvas(businessCard).then((canvas) => {
      const link = document.createElement("a");
      link.download = "business-card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });

  // Initial card update with default design
  currentDesign = window.cardTemplates[0];
  updateBusinessCard();
});
