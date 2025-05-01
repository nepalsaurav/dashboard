<template>
    <div
      class="box is-flex is-align-items-center is-justify-content-space-between px-4 py-2"
      style="max-width: 420px"
    >
      <!-- Ticker & Price -->
      <div class="is-flex is-align-items-center">
        <div>
          <p class="has-text-weight-bold is-size-6">{{ ticker }}</p>
          <p class="is-size-7 has-text-weight-bold">Rs. {{ ltp.toFixed(2) }}</p>
        </div>
      </div>
  
      <!-- Change -->
      <div class="has-text-right">
        <p
          :class="[
            'is-size-6 has-text-weight-semibold',
            pointChange >= 0 ? 'has-text-success' : 'has-text-danger'
          ]"
        >
          {{ pointChange >= 0 ? '+' : '' }}{{ pointChange.toFixed(2) }}
          ({{ percentageChange >= 0 ? '+' : '' }}{{ percentageChange.toFixed(2) }}%)
        </p>
        <p class="is-size-7 has-text-weight-bold">Vol: {{ formatNumber(volume) }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const ticker = 'NABIL'
  const ltp = 478.18
  const pointChange = -3.27
  const percentageChange = -0.68
  const volume = 23914398.4
  
  function formatNumber(n) {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
    }).format(n)
  }
  </script>
  
  <style scoped>
  .box {
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    margin-left: 5px;
  }
  .box:hover {
    box-shadow: 0 0 0.5rem rgba(190, 136, 74, 0.4);
  }
  </style>
  