import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { SEOHead } from "@/components/seo-head";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <SEOHead
        title="404 - Page Not Found"
        description="The page you are looking for does not exist."
        robots="noindex, nofollow"
      />
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            The page you are looking for does not exist or has been moved.
          </p>

          <div className="mt-6">
            <Link href="/" className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-2">
              <i className="fas fa-arrow-left"></i>
              Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
