import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    filters: []
  }),
  actions: {
    addFilter(filter) {
      if(!this.filters.some(_filter => _filter === filter))
        this.filters.push(filter);
    },
    removeFilter(filter) {
      this.filters = this.filters.filter(_filter => _filter !== filter)
    },
    clearFilters() {
      this.filters = []
    }
  }
})