import React from 'react';

interface CountryDetailProps {
  name: string;
  population: string;
  capital: string;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ name, population, capital }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-purple-300">{name}</h2>
      <p className="text-lg text-white">Population: {population}</p>
      <p className="text-lg text-white">Capital: {capital}</p>
    </div>
  );
};

export default CountryDetail;