// app/page.tsx
import Link from 'next/link';
import { countries } from './countries';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Country List</h1>
      <ul className="space-y-2">
        {Object.keys(countries).map((country) => (
          <li key={country}>
            <Link href={`/country/${country}`} className="text-lg text-purple-300 hover:text-purple-500">
              {countries[country].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}