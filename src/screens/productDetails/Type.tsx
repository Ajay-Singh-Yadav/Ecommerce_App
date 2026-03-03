export type Product = {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  dimensions?: {
    width?: number;
    height?: number;
    depth?: number;
  };
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: {
    rating?: number;
    comment?: string;
    date?: string;
    reviewerName?: string;
    reviewerEmail?: string;
  }[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta?: {
    createdAt?: string;
    updatedAt?: string;
    barcode?: string;
    qrCode?: string;
  };
  images?: string[];
  thumbnail?: string;
  products?: any;
};

export interface SizeItem {
  size: string;
  stockLeft: number;
}

export interface SelectSizeProps {
  sizes: SizeItem[];
  onSelectSize?: (size: SizeItem) => void;
}
export interface DevliveyDetailsProp {
  pinCode?: number;
  onCheckPinCode?: () => void;
  expectedDate?: string;
  
}
