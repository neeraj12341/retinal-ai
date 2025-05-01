import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend 
} from "recharts";
import { healthTips } from "@/utils/diagnosisConstants";

interface RecommendationsSectionProps {
  result: any;
  preparePieChartData: (confidence: any) => any[];
}

const RecommendationsSection = ({ result, preparePieChartData }: RecommendationsSectionProps) => {
  return (
    <Card className="border-none shadow-xl overflow-hidden rounded-2xl card-hover">
      <div className="h-2 bg-primary"></div>
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-tight">
          Recommendations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="orange-gradient rounded-xl p-10 text-black">
            <h2 className="font-medium text-lg mb-8">Health Tips:</h2>
            <ul className="space-y-10">
              {healthTips[result.prediction as keyof typeof healthTips].map((tip, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed pb-1">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-1">Prediction Distribution:</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={preparePieChartData(result.confidence)}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      labelLine={{ strokeWidth: 1, stroke: '#666666', strokeDasharray: '3 3' }}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {preparePieChartData(result.confidence).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${(Number(value) * 100).toFixed(1)}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-2 p-4 bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 rounded-xl">
          <p className="text-amber-800 font-medium flex items-start">
            <AlertTriangle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
            <strong>Important:</strong>{" "}
            <span className="leading-relaxed pb-1">
              This AI analysis is for informational purposes only and does not replace professional medical advice. 
              Please consult with an eye care specialist for proper diagnosis and treatment.
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationsSection;
