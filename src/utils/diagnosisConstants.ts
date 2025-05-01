
export const healthTips = {
  ARMD: [
    "Schedule an appointment with a retina specialist immediately",
    "Monitor your vision with an Amsler grid daily",
    "Take AREDS supplements as recommended by your doctor",
    "Maintain a healthy diet rich in antioxidants"
  ],
  Cataract: [
    "Schedule an appointment with an ophthalmologist for a complete evaluation",
    "Protect your eyes from UV radiation with quality sunglasses",
    "Consider cataract surgery if vision is significantly affected",
    "Regular eye check-ups are essential to monitor progression"
  ],
  "Diabetic Retinopathy": [
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
  Normal: [
    "Continue regular eye exams (every 1-2 years)",
    "Maintain a balanced diet rich in vitamins A, C, E, and omega-3 fatty acids",
    "Protect your eyes from UV exposure with quality sunglasses",
    "Take regular screen breaks using the 20-20-20 rule"
  ]
};

export const COLOR_MAP = {
  ARMD: "#0EA5E9",  // Ocean blue
  Cataract: "#1EAEDB",  // Bright blue
  "Diabetic Retinopathy": "#0C4A6E",  // Deep blue
  Glaucoma: "#33C3F0",  // Sky blue 
  Normal: "#D3E4FD"  // Soft blue
};

export const mockPrediction = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to get prediction');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error getting prediction:', error);
    throw error;
  }
};
