<template>
  <div class="max-w-4xl mx-auto">
    <div class="head">
      <h1 style="font-size: xx-large">Список</h1>
      <input type="search" v-model="search" placeholder=" Введите адрес">
    </div>
    <AppMachine :tradePoints="filteredItems"/>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import AppMachine from "./components/AppMachine";

export default {
  components: {AppMachine},
  data() {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions(['getMachines']),
    ...mapActions(['getTradePoints']),
    ...mapActions(['getMachineTypes'])
  },
  computed: {    
    ...mapGetters(['tradePoints']),

    filteredItems() {
      return this.tradePoints.data.filter(item => item.location.address.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  created() {
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
  text-align: center;
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
  border: 1px solid white;
  border-radius: 24px;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 32px 64px rgba(44, 39, 56, 0.14);
  display: flex;
  justify-content: space-around;
  margin: auto;
  padding: 15px;
}
</style>
