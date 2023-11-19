<template>
  <div
    v-if="filters.length"
    class="flex justify-between items-center bg-white p-5 rounded shadow-xl mb-4"
  >
    <div class="grid grid-cols-2 gap-2">
      <Tag
        v-for="filter in filters"
        :name="filter"
        clearable
      />
    </div>
    <div
      @click="clearFilters"
      class="text-desaturatedDarkCyan font-bold hover:cursor-default hover:underline"
    >Clear</div>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useFiltersStore } from "@/stores/filters.js";

export default {
  computed: {
    ...mapState(useFiltersStore, ['filters'])
  },
  methods: {
    ...mapActions(useFiltersStore, ['clearFilters'])
  }
}
</script>