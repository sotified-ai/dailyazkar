import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function DailyReminder() {
  const [email, setEmail] = useState("");
  const [morningReminder, setMorningReminder] = useState(true);
  const [eveningReminder, setEveningReminder] = useState(true);
  const { toast } = useToast();

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would make an API call
    toast({
      title: "Subscribed successfully!",
      description: "You'll receive daily Islamic inspiration and reminders",
    });
    setEmail("");
  };

  const todaysQuote = {
    text: "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose.",
    reference: "Quran 65:3"
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 islamic-geometric">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 dark:text-white mb-4">
              Never Miss Your <span className="gradient-text">Daily Azkar</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get gentle reminders for your morning and evening remembrance, plus daily Islamic inspiration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Daily Quote Card */}
            <div className="glassmorphism rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-quote-right text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Today's Inspiration</h3>
              <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4">
                "{todaysQuote.text}"
              </blockquote>
              <cite className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                {todaysQuote.reference}
              </cite>
            </div>
            
            {/* Reminder Signup */}
            <div className="glassmorphism rounded-2xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-bell text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Daily Reminders</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Receive gentle notifications for your daily Azkar times
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Morning Azkar</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={morningReminder}
                      onChange={(e) => setMorningReminder(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                  <span className="text-gray-700 dark:text-gray-300">Evening Azkar</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={eveningReminder}
                      onChange={(e) => setEveningReminder(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Stay Connected</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of Muslims receiving weekly Islamic insights and reminders
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <Button
                onClick={handleSubscribe}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-lg"
              >
                <i className="fas fa-paper-plane mr-2"></i>Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
