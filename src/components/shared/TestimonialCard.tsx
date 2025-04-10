
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  rating,
}: TestimonialCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="flex-grow pt-6">
        <div className="flex mb-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < rating ? "text-paptecknik-yellow fill-paptecknik-yellow" : "text-gray-300"
                }`}
              />
            ))}
        </div>
        <blockquote className="text-gray-600 italic mb-4">"{quote}"</blockquote>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">
            {role}, {company}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
