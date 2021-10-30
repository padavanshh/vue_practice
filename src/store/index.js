import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state() {
      return {
        allMachines: [],
        tradePoints: [],
        machineTypes: []
      }
  },
  mutations: {
    updateMachines(state, machine) {
      state.allMachines = machine
    },
    updateTradePoints(state, tradePoints) {
      state.tradePoints = tradePoints
    },
    updateMachineTypes(state, machineTypes) {
      state.machineTypes = machineTypes
    }
  },
  actions: {
    async getMachines(context) {
      const machines = await axios.get('http://localhost:3000/machines')
      context.commit('updateMachines', machines)
    },
    async getTradePoints(context) {
      const tradePoints = await axios.get('http://localhost:3000/tradePoints')
      context.commit('updateTradePoints', tradePoints)
    },
    async getMachineTypes(context) {
      const machineTypes = await axios.get('http://localhost:3000/machineTypes')
      context.commit('updateMachineTypes', machineTypes)
    }
  },
  getters: {
    machines(state) {
      return state.allMachines
    },
    tradePoints(state) {
      return state.tradePoints
    },
    machineTypes(state) {
      return state.machineTypes
    }
  },
  modules: {
  }
})
