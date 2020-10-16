<template>
  <div class="chart">
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Line, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

@Component({
  extends: Line,
  mixins: [reactiveProp],
})
export default class Chart extends Vue {
    public renderChart!: (chartData: any, options?: any) => void;

    @Prop()
    public chartData!: any;

    @Prop({ default() { return {}; } })
    options!: object;

    data = {
      labels: this.chartData.labels,
      datasets: [{
        label: 'visits',
        data: this.chartData.data,
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      }],
    };

    mounted() {
      this.renderChart(this.data);
    }
}

</script>
<style>
  .chart{
    width: 700px;
    height: 400px;
  }
</style>
