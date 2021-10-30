<template>
  <ul v-for="machine in machines.data" :key="machine.id">
    <li class="items w-2/5">
      <div v-for="point in tradePoints.data" :key="point.id">
        <div v-if="machine.tradePointId ===  point.id">
          <div>{{ machine.serialNumber }} <app-tags :machId="machine.id"/></div>
          <div>{{ point.location.address }}</div>
          <div>Этаж: {{machine.floor}}</div>
          <iframe :src="'http://search.maps.sputnik.ru/search?http://static-api.maps.sputnik.ru/v1/?width=300&height=170&z=16&clng=' + point.location.longitude + '&clat=' + point.location.latitude + '&mlng=' + point.location.longitude + '&mlat=' + point.location.latitude"></iframe>
          
          <app-modal :time="point.workingTime"></app-modal>
        </div>
      </div>     
    </li>
  </ul>
</template>

<script>
import {mapGetters} from "vuex";
import AppModal from './AppModal.vue';
import AppTags from './AppTags.vue';

export default {
  components: {AppTags, AppModal},
  
  computed: {
    ...mapGetters(['machines']),
    ...mapGetters(['tradePoints'])
  }  
}
</script>

<style scoped>

.items {
  border-radius: 24px;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 32px 64px rgba(44, 39, 56, 0.14);
  margin: auto;
  padding: 15px;
}
</style>