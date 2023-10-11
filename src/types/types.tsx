export type Review = {
  id: number;
  reviewerName: string;
  rating: number;
  comment: string;
};

export type StorageOption = {
  storageSize: string;
  price: number;
};

export type FeatureDescription = {
  part1: string;
  part2: string;
};

export type Feature = {
  heading: string;
  featureDescription: FeatureDescription;
};

export type Product = {
  _id: string;
  name: string;
  brand: string;
  imageLink: string;
  basePrice: number;
  storageOptions: StorageOption[];
  colorAvailability: string[];
  description: string;
  tagline: string;
  reviews: Review[];
  details: string;
  features: Feature[];
};
