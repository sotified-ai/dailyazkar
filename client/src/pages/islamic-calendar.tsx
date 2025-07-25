import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const months = [
  'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
  'Jumada al-Ula', 'Jumada al-Thania', 'Rajab', 'Shaban',
  'Ramadan', 'Shawwal', 'Dhu al-Qadah', 'Dhu al-Hijjah'
];

const events = {
  'Muharram': ['10th Muharram - Ashura'],
  'Rabi al-Awwal': ['12th Rabi al-Awwal - Mawlid'],
  'Shaban': ['15th Shaban - Nisf Shaban'],
  'Ramadan': ['1st Ramadan - Start of Fasting', '27th Ramadan - Laylat al-Qadr'],
  'Shawwal': ['1st Shawwal - Eid al-Fitr'],
  'Dhu al-Hijjah': ['8th Dhu al-Hijjah - Hajj', '10th Dhu al-Hijjah - Eid al-Adha']
};

export default function IslamicCalendarPage() {
  const [currentYear, setCurrentYear] = useState(1448);
  const [selectedYear, setSelectedYear] = useState(1448);

  const getEventsForMonth = (month: string) => events[month] || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Islamic Calendar</h1>
        
        <div className="flex items-center gap-4 mb-8">
          <Button onClick={() => setSelectedYear(selectedYear - 1)}>
            Previous Year
          </Button>
          <span className="text-2xl font-semibold">{selectedYear} AH</span>
          <Button onClick={() => setSelectedYear(selectedYear + 1)}>
            Next Year
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {months.map((month, index) => (
            <div key={month} className="bg-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">{month}</h2>
              <div className="space-y-2">
                {getEventsForMonth(month).map((event, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-sm">•</span>
                    <span className="text-sm">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
