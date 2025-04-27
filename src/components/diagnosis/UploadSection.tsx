
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from "lucide-react";

interface UploadSectionProps {
  imagePreview: string | null;
  isAnalyzing: boolean;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAnalyze: () => void;
  selectedFile: File | null;
}

const UploadSection = ({
  imagePreview,
  isAnalyzing,
  onFileChange,
  onAnalyze,
  selectedFile,
}: UploadSectionProps) => {
  return (
    <Card className="border-none shadow-xl overflow-hidden rounded-2xl card-hover">
      <div className="h-2 bg-primary"></div>
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-primary leading-tight">
          Upload Retinal Image
        </h2>
        <div className="mb-6">
          <input
            type="file"
            id="image-upload"
            onChange={onFileChange}
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
                <Upload className="w-10 h-10 mb-3 text-primary" stroke="currentColor" />
                <p className="mb-2 text-sm text-gray-500 leading-relaxed">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 leading-relaxed pb-1">
                  PNG, JPG, GIF (MAX. 10MB)
                </p>
              </div>
            )}
          </label>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={onAnalyze}
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
  );
};

export default UploadSection;
