import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

const bankAccounts = [
  {
    name: 'EasyPaisa',
    accountNumber: '03214029297',
      },
  {
    name: 'JazzCash',
    accountNumber: '03214029297',
  },
  {
    name: 'RaastID',
    accountNumber: '03214029297',
  },
  {
    name: 'NayaPay-SadaPay',
    accountNumber: '03214029297',
  }
];

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Support Our Mission</h1>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-lg mb-8">
            Your generous donation helps us continue our mission of spreading Islamic knowledge and providing valuable resources to the community.
          </p>

          <div className="bg-card p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Bank Transfer Details</h2>
            <div className="space-y-6">
              {bankAccounts.map((account, index) => (
                <div key={index} className="border p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{account.name}</h3>
                  <p className="text-sm">Account Number: {account.accountNumber}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="w-64">
              Donate Now
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
