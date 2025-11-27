import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Star, TrendingUp, AlertTriangle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface NetworkHealthCheckResultsProps {
  totalScore: number;
  maxScore: number;
  onReset: () => void;
  onClose: () => void;
}

export function NetworkHealthCheckResults({
  totalScore,
  maxScore,
  onReset,
  onClose,
}: NetworkHealthCheckResultsProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const percentage = Math.round((totalScore / maxScore) * 100);

  // Determine recommendation tier
  const getRecommendation = () => {
    if (totalScore >= 40) {
      return {
        level: "Excellent",
        message: "Your network is highly secure",
        description:
          "Your network infrastructure demonstrates strong security practices and proactive management. Continue monitoring and maintaining your current standards.",
        icon: TrendingUp,
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
      };
    } else if (totalScore >= 30) {
      return {
        level: "Fair",
        message: "Some improvements needed",
        description:
          "Your network has a reasonable foundation but would benefit from enhancements in monitoring, segmentation, and documentation. Consider addressing the gaps identified.",
        icon: AlertTriangle,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
      };
    } else {
      return {
        level: "Risky",
        message: "Immediate attention recommended",
        description:
          "Your network has significant vulnerabilities that require urgent attention. We strongly recommend a comprehensive security assessment and remediation plan.",
        icon: AlertCircle,
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
      };
    }
  };

  const recommendation = getRecommendation();
  const RecommendationIcon = recommendation.icon;

  return (
    <div className="space-y-6 py-4">
      {/* Score Display */}
      <Card className={`border-2 ${recommendation.borderColor} ${recommendation.bgColor}`}>
        <CardContent className="p-6 text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background shadow-md"
          >
            <RecommendationIcon className={`w-10 h-10 ${recommendation.color}`} />
          </motion.div>

          <div>
            <h3 className={`text-3xl font-bold ${recommendation.color}`}>
              {totalScore} / {maxScore}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{percentage}%</p>
          </div>

          <div className="space-y-2">
            <h4 className={`text-xl font-semibold ${recommendation.color}`}>
              {recommendation.level}
            </h4>
            <p className="text-base font-medium text-foreground">
              {recommendation.message}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {recommendation.description}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Feedback Section */}
      <Card className="border-2 border-border">
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-foreground">
              Rate Your Experience
            </h4>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label={`Rate ${star} stars`}
                >
                  <Star
                    className={`w-8 h-8 transition-colors ${
                      star <= (hoveredRating || rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="feedback"
              className="text-sm font-medium text-foreground"
            >
              Additional Feedback (Optional)
            </label>
            <Textarea
              id="feedback"
              placeholder="Share your thoughts about this assessment..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="resize-none"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Link to="/contact?type=free-insight" onClick={onClose} className="block">
          <Button className="w-full h-12 text-base font-semibold" size="lg">
            Claim Your Free Insight
          </Button>
        </Link>
        <Link to="/contact?type=consultation" onClick={onClose} className="block">
          <Button
            variant="outline"
            className="w-full h-12 text-base font-semibold border-2 hover:bg-primary/10 hover:border-primary/50"
            size="lg"
          >
            Book a Consultation
          </Button>
        </Link>
      </div>

      {/* Reset Link */}
      <div className="text-center">
        <button
          onClick={onReset}
          className="text-sm text-muted-foreground hover:text-primary underline transition-colors"
        >
          Retake Assessment
        </button>
      </div>
    </div>
  );
}
