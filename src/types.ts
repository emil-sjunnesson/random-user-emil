export interface User {
  cell: string;
  dob: {
    date: string;
    age: number;
  };
  email: string;
  gender: 'male' | 'female';
  location: {
    city: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    country: string;
    postcode: string;
    state: string;
    street: {
      number: number;
      name: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    date: string;
    age: number;
  };
}
