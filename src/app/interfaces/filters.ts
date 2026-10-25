export type SortKey = 'default' | 'price-asc' | 'price-desc' | 'power-desc';

export interface AutoFilters {
  text: string;
  brand: string;        // '' = toutes les marques
  maxPrice: number;
  sort: SortKey;
  onlyAvailable: boolean;
  favoritesOnly: boolean;
}
