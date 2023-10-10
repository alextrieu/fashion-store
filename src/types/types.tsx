export type StorageOption = {
  storageSize: string;
  price: number;
};

export type Product = {
  _id: string;
  name: string;
  brand: string;
  imageLink: string;
  storageOptions: StorageOption[];
  colorAvailability: string[];
  description: string;
  tagline: string;
};
