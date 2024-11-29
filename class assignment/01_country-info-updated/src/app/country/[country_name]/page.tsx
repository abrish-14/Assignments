import { countries } from '../../countries';
import CountryDetail from '../../../components/CountryDetail'; 

interface Props {
  params: {
    country_name: string;
  };
}

export default function Country({ params }: Props) {
  const { country_name } = params;
  const country = countries[country_name as keyof typeof countries];

  if (!country) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-4xl font-bold">Country not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex items-center justify-center">
      <CountryDetail 
        name={country.name} 
        population={country.population} 
        capital={country.capital} 
      />
    </div>
  );
}