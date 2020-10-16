<template>
  <div class="analytics">
    <h2>Аналитика</h2>
    <Chart :chart-data="{ data: this.visits, labels: this.date}"/>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import visits from '../visits';
import Chart from '../components/Chart.vue';

@Component({
  components: {
    Chart,
  },
})
export default class Analytics extends Vue {
  get date() {
    return visits.map((item) => item.date);
  }

  get visits() {
    return visits.map((item) => item.visits);
  }
}

</script>
<style>
  .analytics{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
</style>
