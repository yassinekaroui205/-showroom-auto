import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { AutoFilters, SortKey } from '../../interfaces/filters';

@Component({
  selector: 'app-search-bar',
  imports: [FontAwesomeModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  faMagnifyingGlass = faMagnifyingGlass;
  faRotateLeft = faRotateLeft;

  @Input() brands: string[] = [];
  @Input() priceLimit = 1000;
  @Input() resultCount = 0;
  @Input() filters!: AutoFilters;

  @Output() onFiltersChange = new EventEmitter<AutoFilters>();
  @Output() onReset = new EventEmitter<void>();

  private update(patch: Partial<AutoFilters>): void {
    this.onFiltersChange.emit({ ...this.filters, ...patch });
  }

  changeText(value: string): void { this.update({ text: value }); }
  changeBrand(value: string): void { this.update({ brand: this.filters.brand === value ? '' : value }); }
  changeMaxPrice(value: string): void { this.update({ maxPrice: Number(value) }); }
  changeSort(value: string): void { this.update({ sort: value as SortKey }); }
  changeAvailable(checked: boolean): void { this.update({ onlyAvailable: checked }); }
  changeFavorites(checked: boolean): void { this.update({ favoritesOnly: checked }); }
}
