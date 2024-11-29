export type CountryData = {
    name: string;
    population: string;
    capital: string;
  };
  
  export const countries: Record<string, CountryData> = {
    canada: {
      name: "Canada",
      population: "38 million",
      capital: "Ottawa",
    },
    usa: {
      name: "United States",
      population: "331 million",
      capital: "Washington, D.C.",
    },
    germany: {
      name: "Germany",
      population: "83 million",
      capital: "Berlin",
    },
    japan: {
      name: "Japan",
      population: "126 million",
      capital: "Tokyo",
    },
    australia: {
      name: "Australia",
      population: "25 million",
      capital: "Canberra",
    },
  };