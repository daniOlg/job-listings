<template>
  <div class="flex">
    <strong @click="addFilter(this.name)" :class="{
      'text-desaturatedDarkCyan bg-lightGrayishCyan px-2 py-1 rounded-s': true,
      'hover:text-lightGrayishCyan hover:bg-desaturatedDarkCyan hover:cursor-default rounded-e': !clearable
    }">{{ name }}</strong>
    <img
      @click="removeFilter(this.name)"
      class="bg-desaturatedDarkCyan w-8 h-8 p-2 hover:bg-veryDarkGrayishCyan rounded-e"
      v-if="clearable"
      src="@/assets/icons/icon-remove.svg"
      alt="remove icon"
    />
  </div>
</template>

<script>
import { useFiltersStore } from "~/stores/filters.js";
import { mapActions } from "pinia";

export default {
  props: {
    name: { type: String, required: true },
    clearable: { type: Boolean }
  },
  methods: {
    ...mapActions(useFiltersStore, ["addFilter", "removeFilter"])
  }
}
</script>