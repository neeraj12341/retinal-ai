
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from "recharts";
import { toast } from "sonner";
import { Eye, Upload, AlertTriangle, CheckCircle } from "lucide-react"; 

const mockPrediction = (file: File): Promise<any> => {
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

const healthTips = {
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

const COLORS = ["#C471F5", "#F377AB", "#84FAB0", "#8FD3F4", "#FFD1FF"];
const COLOR_MAP = {
  Cataract: "#C471F5",
  AMD: "#F377AB",
  DR: "#84FAB0",
  Glaucoma: "#8FD3F4",
  Healthy: "#FFD1FF"
};

const Diagnosis = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      if (!file.type.includes('image/')) {
        toast.error("Please upload an image file");
        return;
      }
      
      setSelectedFile(file);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
      
      setResult(null);
    }
  };
  
  const handleAnalyze = async () => {
    if (!selectedFile) {
      toast.error("Please select an image to analyze");
      return;
    }
    
    setIsAnalyzing(true);
    
    try {
      const prediction = await mockPrediction(selectedFile);
      setResult(prediction);
      
      if (prediction.prediction === "Healthy") {
        toast.success("Good news! No retinal diseases detected.");
      } else {
        toast.warning(`Potential ${prediction.prediction} detected. Please consult with a specialist.`);
      }
    } catch (error) {
      console.error("Error analyzing image:", error);
      toast.error("An error occurred while analyzing the image");
    } finally {
      setIsAnalyzing(false);
    }
  };
  
  const preparePieChartData = (confidence: any) => {
    return Object.keys(confidence).map(key => ({
      name: key,
      value: confidence[key],
      color: COLOR_MAP[key as keyof typeof COLOR_MAP]
    }));
  };
  
  const prepareBarChartData = (confidence: any) => {
    return Object.keys(confidence).map(key => ({
      name: key,
      value: (confidence[key] * 100).toFixed(1),
      fill: COLOR_MAP[key as keyof typeof COLOR_MAP]
    }));
  };
  
  return (
    <div className="container mx-auto py-12 px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Retinal Disease Diagnosis
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed pb-2">
          Upload a high-quality retinal scan image for AI analysis. Our advanced model can 
          detect signs of Cataract, AMD, Diabetic Retinopathy, and Glaucoma.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-none shadow-xl overflow-hidden rounded-2xl card-hover">
          <div className="h-2 bg-primary"></div>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Upload Retinal Image</h2>
            <div className="mb-6">
              <input
                type="file"
                id="image-upload"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
              <label
                htmlFor="image-upload"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-primary/30 rounded-xl cursor-pointer bg-accent/10 hover:bg-accent/20 transition-colors"
              >
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Retinal scan preview" 
                    className="h-full object-contain rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload
                      className="w-10 h-10 mb-3 text-primary" 
                      stroke="currentColor" 
                    />
                    <p className="mb-2 text-sm text-gray-500 leading-relaxed">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed pb-1">PNG, JPG, GIF (MAX. 10MB)</p>
                  </div>
                )}
              </label>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={handleAnalyze}
                disabled={!selectedFile || isAnalyzing}
                className="bg-primary hover:bg-secondary text-white w-full rounded-full py-6"
              >
                {isAnalyzing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  "Analyze Image"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
        
        
        <Card className="border-none shadow-xl overflow-hidden rounded-2xl">
          <div className="h-2 bg-secondary"></div>
          <CardContent className="p-6 bg-white">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Results</h2>
            
            {!result && (
              <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                <Eye className="h-12 w-12 mb-3" />
                <p className="leading-relaxed pb-1">Upload and analyze a retinal image to see results here</p>
              </div>
            )}
            
            {result && (
              <div>
                <div className="mb-6 p-4 rounded-xl purple-gradient text-white">
                  <h3 className="font-medium text-lg mb-2">Diagnosis:</h3>
                  <div className="flex items-center">
                    <span 
                      className="text-2xl font-bold"
                    >
                      {result.prediction}
                    </span>
                    <span className="ml-2 text-white/80">
                      ({(result.confidence[result.prediction] * 100).toFixed(1)}% confidence)
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-lg mb-3">Confidence Scores:</h3>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={prepareBarChartData(result.confidence)}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip formatter={(value) => [`${value}%`, 'Confidence']} />
                        <Bar dataKey="value">
                          {prepareBarChartData(result.confidence).map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      {result && (
        <Card className="mt-8 border-none shadow-xl overflow-hidden rounded-2xl bg-white">
          <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Recommendations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="orange-gradient rounded-xl p-6 text-white">
                <h3 className="font-medium text-lg mb-3">Health Tips:</h3>
                <ul className="space-y-2">
                  {healthTips[result.prediction as keyof typeof healthTips].map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="leading-relaxed pb-1">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Prediction Distribution:</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={preparePieChartData(result.confidence)}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {preparePieChartData(result.confidence).map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${(Number(value) * 100).toFixed(1)}%`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 rounded-xl">
              <p className="text-amber-800 font-medium flex items-start">
                <AlertTriangle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <strong>Important:</strong> <span className="leading-relaxed pb-1">This AI analysis is for informational purposes only and does not replace professional medical advice. 
                Please consult with an eye care specialist for proper diagnosis and treatment.</span>
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Diagnosis;
