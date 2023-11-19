<template>
  <div
    v-if="filters.filter(_filter => filter.some(__filter => __filter === _filter)).length === filters.length"
    class="bg-white flex justify-between items-center p-5 rounded shadow-xl"
  >
    <div class="flex gap-5">
      <div>
        <img
          :src="'/images/'+job.logo"
          :alt="job.company + ' logo'"
        />
      </div>
      <div class="flex flex-col">
        <div class="flex">{{job.company}} {{job.new}} {{job.featured}}</div>
        <div class="flex">{{job.position}}</div>
        <div class="flex">{{job.postedAt}} * {{job.contract}} * {{job.location}}</div>
      </div>
    </div>
    <div class="flex gap-4">
      <Tag v-bind:name="job.role" />
      <Tag v-bind:name="job.level" />
      <Tag v-for="filter in job.languages" v-bind:name="filter" />
      <Tag v-for="filter in job.tools" v-bind:name="filter" />
    </div>
  </div>
</template>
<script>
import { mapState } from "pinia";
import { useFiltersStore } from "~/stores/filters.js";

export default {
  data() {
    return {
      filter: [this.job.role, this.job.level, ...this.job.languages, ...this.job.tools]
    }
  },
  props: {
    job: { type: Object, required: true}
  },
  computed: {
    ...mapState(useFiltersStore, ['filters'])
  },
}
</script>