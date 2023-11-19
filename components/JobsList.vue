<template>
  <JobCard v-for="job in jobs" v-bind:job="job" />
</template>
<script setup>
const { data: jobs } = await useFetch('/api/jobs')
</script>