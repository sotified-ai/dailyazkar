import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { useState } from 'react';

type City = string;
type Country = 'Pakistan' | 'UK' | 'Other';

const cities: Record<Country, City[]> = {
  Pakistan: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad'],
  UK: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow'],
  Other: ['New York', 'Dubai', 'Istanbul', 'Cairo']
};

export default function PrayerTimesPage() {
  const [selectedCountry, setSelectedCountry] = useState<Country>('Pakistan');
  const [selectedCity, setSelectedCity] = useState<City>('Karachi');

  const getPrayerTimes = () => {
    // TODO: Implement prayer times API integration
    return {
      fajr: '04:30',
      sunrise: '05:45',
      dhuhr: '12:30',
      asr: '15:45',
      maghrib: '18:30',
      isha: '19:45'
    };
  };

  const prayerTimes = getPrayerTimes();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Prayer Times</h1>
        
        <div className="flex gap-4 mb-8">
          <Select
            value={selectedCountry}
            onValueChange={(value) => setSelectedCountry(value as Country)}
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(cities).map(country => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select
            value={selectedCity}
            onValueChange={(value) => setSelectedCity(value as City)}
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              {cities[selectedCountry].map(city => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="bg-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Today's Prayer Times</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(prayerTimes).map(([prayer, time]) => (
              <div key={prayer} className="flex items-center justify-between p-4 border-b">
                <span className="font-medium">{prayer}</span>
                <span>{time}</span>
              </div>
            ))}
          </div>
        </div>

        <Button className="mt-8" onClick={() => {
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                // TODO: Implement location-based city selection
                console.log('Latitude:', position.coords.latitude);
                console.log('Longitude:', position.coords.longitude);
              },
              (error) => {
                console.error('Error getting location:', error);
              }
            );
          }
        }}>Use My Location</Button>
      </main>
    </div>
  );
}
