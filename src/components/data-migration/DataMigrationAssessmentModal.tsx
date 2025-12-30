import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DataMigrationQuestion } from "./DataMigrationQuestion";
import { DataMigrationResults } from "./DataMigrationResults";
import { motion, AnimatePresence } from "framer-motion";

interface RadioOption {
  text: string;
  value: string;
  score?: number;
}

interface CheckboxOption {
  text: string;
  value: string;
  score: number;
  exclusive?: boolean;
}

interface Question {
  id: number;
  question: string;
  type: "radio" | "checkbox" | "dropdown";
  options: RadioOption[] | CheckboxOption[];
  scoringType: "fixed" | "cumulative";
  maxScore?: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What type of data are you looking to migrate?",
    type: "checkbox",
    scoringType: "cumulative",
    maxScore: 10,
    options: [
      { text: "Customer/CRM Data", value: "customer_crm", score: 2 },
      { text: "Financial/Accounting Records", value: "financial", score: 2 },
      { text: "Application Data", value: "application", score: 2 },
      { text: "Database Tables", value: "database", score: 2 },
      { text: "File Systems", value: "file_systems", score: 2 },
      { text: "Legacy System Data", value: "legacy", score: 2 },
      { text: "Other (specify)", value: "other", score: 2 },
      { text: "Not sure", value: "not_sure", score: 5, exclusive: true },
    ],
  },
  {
    id: 2,
    question: "What is your current source system?",
    type: "dropdown",
    scoringType: "fixed",
    options: [
      { text: "Cloud Platform (AWS/Azure/GCP)", value: "cloud", score: 2 },
      { text: "SQL / MySQL / Oracle / PostgreSQL", value: "sql", score: 5 },
      { text: "CRM (Salesforce / Zoho / HubSpot / Other)", value: "crm", score: 5 },
      { text: "On-Premise Server", value: "on_prem", score: 7 },
      { text: "Custom/Legacy System", value: "custom_legacy", score: 10 },
      { text: "Other (specify)", value: "other", score: 5 },
      { text: "Not sure", value: "not_sure", score: 5 },
    ],
  },
  {
    id: 3,
    question: "What is your target system for migration?",
    type: "dropdown",
    scoringType: "fixed",
    options: [
      { text: "Cloud Platform (AWS/Azure/GCP)", value: "cloud", score: 2 },
      { text: "SQL / MySQL / Oracle / PostgreSQL", value: "sql", score: 5 },
      { text: "CRM / SaaS Application", value: "crm_saas", score: 5 },
      { text: "On-Premise Server", value: "on_prem", score: 7 },
      { text: "Custom/Legacy System", value: "custom_legacy", score: 10 },
      { text: "Other (specify)", value: "other", score: 5 },
      { text: "Not sure", value: "not_sure", score: 5 },
    ],
  },
  {
    id: 4,
    question: "Approximate size of data to be migrated",
    type: "radio",
    scoringType: "fixed",
    options: [
      { text: "Less than 5 GB", value: "lt_5gb", score: 2 },
      { text: "5–50 GB", value: "5_50gb", score: 4 },
      { text: "50–250 GB", value: "50_250gb", score: 6 },
      { text: "250 GB – 1 TB", value: "250gb_1tb", score: 8 },
      { text: "More than 1 TB", value: "gt_1tb", score: 10 },
      { text: "Not sure", value: "not_sure", score: 6 },
    ],
  },
  {
    id: 5,
    question: "Do you require data transformation or cleansing?",
    type: "checkbox",
    scoringType: "cumulative",
    maxScore: 10,
    options: [
      { text: "Yes — Data Mapping", value: "mapping", score: 4 },
      { text: "Yes — Data Cleansing & Deduplication", value: "cleansing", score: 4 },
      { text: "Yes — Data Restructuring", value: "restructuring", score: 4 },
      { text: "No", value: "no", score: 0, exclusive: true },
      { text: "Not sure", value: "not_sure", score: 5, exclusive: true },
    ],
  },
  {
    id: 6,
    question: "Any compliance or security requirements?",
    type: "checkbox",
    scoringType: "cumulative",
    maxScore: 10,
    options: [
      { text: "GDPR", value: "gdpr", score: 10 },
      { text: "HIPAA", value: "hipaa", score: 10 },
      { text: "ISO Standards", value: "iso", score: 5 },
      { text: "Data Encryption Required", value: "encryption", score: 5 },
      { text: "Role-Based Access / Audit Trails", value: "rbac", score: 5 },
      { text: "No specific requirements", value: "no_requirements", score: 0, exclusive: true },
      { text: "Not sure", value: "not_sure", score: 5, exclusive: true },
    ],
  },
  {
    id: 7,
    question: "What level of downtime is acceptable during migration?",
    type: "radio",
    scoringType: "fixed",
    options: [
      { text: "Downtime is acceptable", value: "downtime_ok", score: 2 },
      { text: "Minimal downtime preferred", value: "minimal", score: 6 },
      { text: "Zero downtime required", value: "zero", score: 10 },
      { text: "Not sure", value: "not_sure", score: 6 },
    ],
  },
  {
    id: 8,
    question: "Do you have systems/integrations that rely on this data?",
    type: "checkbox",
    scoringType: "cumulative",
    maxScore: 10,
    options: [
      { text: "ERP", value: "erp", score: 4 },
      { text: "CRM", value: "crm", score: 4 },
      { text: "API Integrations", value: "api", score: 4 },
      { text: "HRMS", value: "hrms", score: 4 },
      { text: "Internal Applications", value: "internal_apps", score: 4 },
      { text: "No dependencies", value: "no_dependencies", score: 0, exclusive: true },
      { text: "Not sure", value: "not_sure", score: 5, exclusive: true },
    ],
  },
  {
    id: 9,
    question: "Testing and rollback readiness",
    type: "radio",
    scoringType: "fixed",
    options: [
      { text: "Yes — documented test plan + rollback plan", value: "yes_documented", score: 0 },
      { text: "Partially — basic verification only", value: "partial", score: 5 },
      { text: "No plan yet", value: "no_plan", score: 10 },
      { text: "Not sure", value: "not_sure", score: 10 },
    ],
  },
  {
    id: 10,
    question: "Do you need post-migration support?",
    type: "radio",
    scoringType: "fixed",
    options: [
      { text: "Yes — Ongoing support", value: "ongoing", score: 10 },
      { text: "Yes — Only initial verification", value: "initial", score: 6 },
      { text: "No", value: "no", score: 0 },
      { text: "Not sure", value: "not_sure", score: 6 },
    ],
  },
];

interface DataMigrationAssessmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DataMigrationAssessmentModal({ open, onOpenChange }: DataMigrationAssessmentModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = questions.length;
  const progress = ((currentStep + 1) / totalQuestions) * 100;
  const currentQuestion = questions[currentStep];
  
  const hasAnswer = (() => {
    const answer = answers[currentQuestion?.id];
    if (currentQuestion?.type === "checkbox") {
      return Array.isArray(answer) && answer.length > 0;
    }
    return answer !== undefined && answer !== "";
  })();

  const handleRadioSelect = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleDropdownSelect = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleCheckboxSelect = (questionId: number, values: string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: values }));
  };

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleClose = () => {
    handleReset();
    onOpenChange(false);
  };

  // Calculate scores
  const calculateScores = () => {
    let totalScore = 0;
    let notSureCount = 0;

    questions.forEach((q) => {
      const answer = answers[q.id];
      
      if (!answer) return;

      // Count "not_sure" answers for confidence score
      if (q.type === "checkbox") {
        if (Array.isArray(answer) && answer.includes("not_sure")) {
          notSureCount++;
        }
      } else {
        if (answer === "not_sure") {
          notSureCount++;
        }
      }

      // Calculate question score
      if (q.type === "checkbox") {
        const selectedValues = answer as string[];
        let qScore = 0;
        
        (q.options as CheckboxOption[]).forEach((opt) => {
          if (selectedValues.includes(opt.value)) {
            qScore += opt.score;
          }
        });
        
        // Apply cap
        totalScore += Math.min(qScore, q.maxScore || 10);
      } else {
        const selectedOption = (q.options as RadioOption[]).find(
          (opt) => opt.value === answer
        );
        if (selectedOption?.score !== undefined) {
          totalScore += selectedOption.score;
        }
      }
    });

    // Confidence score: 10 - number of "not sure" answers (clamped 0-10)
    const confidenceScore = Math.max(0, Math.min(10, 10 - notSureCount));

    // Log risk flags for analytics
    const riskFlags = {
      legacyInvolvement: 
        (Array.isArray(answers[1]) && answers[1].includes("legacy")) ||
        answers[2] === "custom_legacy" ||
        answers[3] === "custom_legacy",
      veryLargeVolume: answers[4] === "gt_1tb",
      zeroDowntime: answers[7] === "zero",
      strictCompliance: 
        Array.isArray(answers[6]) && 
        (answers[6].includes("gdpr") || answers[6].includes("hipaa")),
      highIntegrationDep: 
        Array.isArray(answers[8]) && 
        answers[8].filter(v => !["no_dependencies", "not_sure"].includes(v)).length >= 3,
      noTestingPlan: answers[9] === "no_plan" || answers[9] === "not_sure",
      lowConfidence: confidenceScore <= 4,
    };

    console.log("Data Migration Assessment - Risk Flags:", riskFlags);

    return { totalScore, confidenceScore };
  };

  const { totalScore, confidenceScore } = calculateScores();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" hideDefaultClose>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold flex-1 text-center">
              {showResults ? "Your Data Migration Score" : "Data Migration Assessment"}
            </DialogTitle>
            <button
              onClick={() => onOpenChange(false)}
              className="h-9 w-9 rounded-full text-neutral-700 hover:text-[#E52629] hover:bg-[#E52629]/10 focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:outline-none transition-colors flex items-center justify-center"
              aria-label="Close"
            >
              <span className="text-2xl leading-none">&times;</span>
            </button>
          </div>
        </DialogHeader>

        {!showResults ? (
          <div className="space-y-6 py-4">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                <span>Question {currentStep + 1} of {totalQuestions}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <DataMigrationQuestion
                  question={currentQuestion.question}
                  type={currentQuestion.type}
                  options={currentQuestion.options}
                  selectedValue={answers[currentQuestion.id]}
                  onSelectRadio={(value) => handleRadioSelect(currentQuestion.id, value)}
                  onSelectDropdown={(value) => handleDropdownSelect(currentQuestion.id, value)}
                  onSelectCheckbox={(values) => handleCheckboxSelect(currentQuestion.id, values)}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4 pt-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="flex-1 border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 transition-colors"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleNext}
                disabled={!hasAnswer}
                className="flex-1 border-[#E52629] text-[#E52629] hover:bg-[#E52629] hover:text-white focus-visible:ring-2 focus-visible:ring-[#E52629] focus-visible:ring-offset-2 transition-colors"
              >
                {currentStep === totalQuestions - 1 ? "See Results" : "Next"}
                {currentStep < totalQuestions - 1 && (
                  <ChevronRight className="ml-2 h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        ) : (
          <DataMigrationResults
            totalScore={totalScore}
            confidenceScore={confidenceScore}
            onReset={handleReset}
            onClose={handleClose}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
