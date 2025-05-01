import React, { useState } from "react";
import { toast } from "sonner";
import UploadSection from "@/components/diagnosis/UploadSection";
import ResultsSection from "@/components/diagnosis/ResultsSection";
import RecommendationsSection from "@/components/diagnosis/RecommendationsSection";
import { mockPrediction, COLOR_MAP } from "@/utils/diagnosisConstants";

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
      
      // Clear the image preview and selected file after analysis
      setImagePreview(null);
      setSelectedFile(null);
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
  
  return (
    <div className="container mx-auto py-12 px-6">
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 leading-tight px-4">
          Retinal Disease Diagnosis
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed pb-4 px-6">
          Upload a high-quality retinal scan image for AI analysis. Our advanced model can 
          detect signs of Cataract, ARMD, Diabetic Retinopathy, and Glaucoma.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UploadSection 
          imagePreview={imagePreview}
          isAnalyzing={isAnalyzing}
          onFileChange={handleFileChange}
          onAnalyze={handleAnalyze}
          selectedFile={selectedFile}
        />
        
        <ResultsSection result={result} />
      </div>
      
      {result && <div className="mt-12"><RecommendationsSection result={result} preparePieChartData={preparePieChartData} /></div>}
    </div>
  );
};

export default Diagnosis;
