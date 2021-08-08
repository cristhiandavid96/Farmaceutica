<template>
  <line-chart :data="chartData"></line-chart>

  <pie-chart :data="[['nokia',150],['samn¿sun',200]]"></pie-chart>
</template>

<script>
export default {
  name: "chart",
  data() {
    return {
      chartData: {
        "2020-0512": 2,
        "2020-0512": 4,
        "2020-0512": 5,
      },
    };
  },
};
</script>
