export type Review = {
  id: number;
  reviewerName: string;
  rating: number;
  comment: string;
};

export type Variant = {
  color: string;
  storageSize: string;
  price: number;
  imageLinks: string[];
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
  basePrice: number;
  variants: Variant[];
  description: string;
  tagline: string;
  reviews: Review[];
  details: string;
  features: Feature[];
};

export type CartHeaderProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};
