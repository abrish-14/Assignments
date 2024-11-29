import { countries } from '../../countries';

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
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">{country.name}</h1>
      <p className="text-lg">Population: {country.population}</p>
      <p className="text-lg">Capital: {country.capital}</p>
    </div>
  );
}