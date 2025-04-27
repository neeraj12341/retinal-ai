
export const healthTips = {
  Cataract: [
    "Schedule an appointment with an ophthalmologist for a complete evaluation",
    "Protect your eyes from UV radiation with quality sunglasses",
    "Consider cataract surgery if vision is significantly affected",
    "Regular eye check-ups are essential to monitor progression"
  ],
  AMD: [
    "Consult with a retina specialist as soon as possible",
    "Follow an antioxidant-rich diet with leafy greens and fish",
    "Monitor your vision daily with an Amsler grid",
    "Consider AREDS2 supplements after consulting your doctor"
  ],
  DR: [
    "Schedule an urgent appointment with a retina specialist",
    "Maintain tight control of blood glucose levels",
    "Monitor blood pressure and cholesterol regularly",
    "Follow a diabetic-friendly diet and exercise plan"
  ],
  Glaucoma: [
    "See a glaucoma specialist immediately for pressure measurement",
    "Use prescribed eye drops consistently as directed",
    "Avoid activities that increase eye pressure",
    "Schedule regular follow-ups to monitor intraocular pressure"
  ],
  Healthy: [
    "Continue regular eye exams (every 1-2 years)",
    "Maintain a balanced diet rich in vitamins A, C, E, and omega-3 fatty acids",
    "Protect your eyes from UV exposure with quality sunglasses",
    "Take regular screen breaks using the 20-20-20 rule"
  ]
};

export const COLOR_MAP = {
  Cataract: "#C471F5",
  AMD: "#F377AB",
  DR: "#84FAB0",
  Glaucoma: "#8FD3F4",
  Healthy: "#FFD1FF"
};

export const mockPrediction = (file: File): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const diseases = ["Cataract", "AMD", "DR", "Glaucoma", "Healthy"];
      const randomIndex = Math.floor(Math.random() * diseases.length);
      const disease = diseases[randomIndex];
      
      let confidenceScores;
      if (disease === "Healthy") {
        confidenceScores = {
          Healthy: 0.92,
          Cataract: 0.03,
          AMD: 0.02,
          DR: 0.02,
          Glaucoma: 0.01,
        };
      } else {
        confidenceScores = {
          [disease]: 0.75 + Math.random() * 0.2,
          Healthy: 0.05 + Math.random() * 0.1,
        };
        
        const remaining = 1 - confidenceScores[disease] - confidenceScores.Healthy;
        const otherDiseases = diseases.filter(d => d !== disease && d !== "Healthy");
        otherDiseases.forEach((d, i) => {
          if (i === otherDiseases.length - 1) {
            confidenceScores[d] = parseFloat(remaining.toFixed(2));
          } else {
            const value = remaining / otherDiseases.length;
            confidenceScores[d] = parseFloat(value.toFixed(2));
          }
        });
      }
      
      resolve({
        prediction: disease,
        confidence: confidenceScores,
        filename: file.name,
      });
    }, 2000);
  });
};
