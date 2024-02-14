export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
  images: Array<string>;
}

export interface ProductState {
  list: Array<Product>;
  total: number;
  showbutton: false;
}
