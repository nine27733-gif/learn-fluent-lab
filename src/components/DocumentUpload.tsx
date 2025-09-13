import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";

export const DocumentUpload = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = async (files: File[]) => {
    setUploading(true);
    setUploadProgress(0);

    // Simulate upload process
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    setUploading(false);
    toast({
      title: "Upload Successful",
      description: `${files.length} document(s) processed successfully`,
    });
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upload Your Study Materials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Drop your PDFs, documents, presentations, or any study materials. 
            Our AI will extract key concepts and generate personalized assessments.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 shadow-card hover:shadow-hover transition-all duration-300">
            <div
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                isDragOver
                  ? "border-primary bg-primary/5 scale-105"
                  : "border-border hover:border-primary/50"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center">
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">
                  Drop your files here or click to upload
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Supports PDF, DOCX, PPTX, TXT and more
                </p>
                
                <input
                  type="file"
                  multiple
                  accept=".pdf,.docx,.pptx,.txt,.md"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                
                <Button asChild className="bg-gradient-primary hover:opacity-90">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    Select Files
                  </label>
                </Button>
              </div>
            </div>

            {uploading && (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Processing documents...</span>
                  <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
              </div>
            )}

            {/* Recent uploads */}
            <div className="mt-8 space-y-3">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                Recent Uploads
              </h4>
              
              <RecentUploadItem 
                name="Advanced Mathematics Notes.pdf"
                status="processed"
                size="2.4 MB"
              />
              <RecentUploadItem 
                name="Physics Chapter 5.docx"
                status="processed"
                size="1.8 MB"
              />
              <RecentUploadItem 
                name="Chemistry Lab Report.pdf"
                status="processing"
                size="3.1 MB"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const RecentUploadItem = ({ name, status, size }: {
  name: string;
  status: "processed" | "processing" | "error";
  size: string;
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case "processed":
        return <CheckCircle className="w-4 h-4 text-learning-green" />;
      case "processing":
        return <div className="w-4 h-4 border-2 border-learning-blue border-t-transparent rounded-full animate-spin" />;
      case "error":
        return <AlertCircle className="w-4 h-4 text-destructive" />;
    }
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
      <FileText className="w-5 h-5 text-muted-foreground" />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{name}</p>
        <p className="text-xs text-muted-foreground">{size}</p>
      </div>
      {getStatusIcon()}
    </div>
  );
};