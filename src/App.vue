<template>
  <div >
    <div class="head w-2/5">
      <strong>Список</strong>
      <input type="search" placeholder=" input" class="border">
    </div>
    <AppMachine />
  </div>
</template>

<script>
import {mapActions} from "vuex";
import AppMachine from "./components/AppMachine";

export default {
  components: {AppMachine},
  methods: {
    ...mapActions(['getMachines']),
    ...mapActions(['getTradePoints']),
    ...mapActions(['getMachineTypes'])
  },
  mounted() {
    this.getMachines()
    this.getTradePoints()
    this.getMachineTypes()
  }
}
</script>

<style>
input {
  background: #FFFFFF;
  border: 1px solid #DBE2EA;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
}
input:hover {
  background: #FFFFFF;
  border: 1px solid #0880AE;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
}
.head {
  /*border: 1px solid red;*/
  border-radius: 24px;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 32px 64px rgba(44, 39, 56, 0.14);
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 15px;
}
</style>
