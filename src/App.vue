<template>
  <div class="app">
    <HemodialysisSeance />
    <AfterSeance />
    <HomeTreatment />
    <Recommendations />
  </div>
</template>

<script setup >
import HemodialysisSeance from '@/components/HemodialysisSeance'
import AfterSeance from '@/components/AfterSeance'
import HomeTreatment from '@/components/HomeTreatment'
import Recommendations from '@/components/Recommendations'
</script>


<style>

* {
  margin: 0;
}
ul {
  padding: 0;
  list-style: none;
}
.app {
  padding: 20px;
}

</style>