export interface WalmartProductResult {
  results: ProductContent[];
  job: JobDetails;
}

export interface ProductContent {
  content: Product;
  created_at: string;
  updated_at: string;
  page: number;
  url: string;
  job_id: string;
  status_code: number;
  parser_type: string;
}

export interface Product {
  url: string;
  meta: Meta;
  price: number;
  title: string;
  images: string[];
  rating: Rating;
  seller: Seller;
  currency: string;
  warranty: string;
  _warnings: string[];
  variations: Variation[];
  breadcrumbs: string[];
  description: string;
  out_of_stock: boolean;
  specifications: Specification[];
  parse_status_code: number;
  price_strikethrough?: number;
}

export interface Meta {
  sku: string;
  gtin: string;
}

export interface Rating {
  count: number;
  rating: number;
}

export interface Seller {
  id: string;
  url: string;
  name: string;
  catalog_id: string;
  official_name: string;
}

export interface Variation {
  state: string;
  product_id: string;
  selected_options: SelectedOption[];
}

export interface SelectedOption {
  key: string;
  value: string;
}

export interface Specification {
  key: string;
  value: string;
}

export interface JobDetails {
  callback_url: string;
  client_id: number;
  context: JobContext[];
  created_at: string;
  domain: string;
  geo_location: null | string;
  id: string;
  limit: number;
  locale: null | string;
  pages: number;
  parse: boolean;
  parser_type: null | string;
  parsing_instructions: null | string;
  browser_instructions: null | string;
  render: null | boolean;
  url: string;
  query: string;
  source: string;
  start_page: number;
  status: string;
  storage_type: null | string;
  storage_url: null | string;
  subdomain: string;
  content_encoding: string;
  updated_at: string;
  user_agent_type: string;
  session_info: null | string;
  statuses: any[];
  client_notes: null | string;
  _links: Link[];
}

export interface JobContext {
  key: string;
  value: any;
}

export interface Link {
  rel: string;
  href: string;
  method: string;
}
