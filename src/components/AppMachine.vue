<template>
  <div v-for="machine in machines.data" :key="machine.id">
    <div v-for="point in tradePoints" :key="point.id">
      <ul v-if="machine.tradePointId ===  point.id">
        <li class="items w-2/5" >
        <div>
          <div><strong>{{ machine.serialNumber }}</strong> <app-tags :machId="machine.id"/></div>
          <div>{{ point.location.address }}</div>
          <div>Этаж: {{machine.floor}}</div>
          <app-modal :time="point.workingTime"></app-modal>
        </div>
          <span class='map'>           
            <iframe :src="'https://www.openstreetmap.org/export/embed.html?bbox=' + point.location.longitude + '%2C' + point.location.latitude + '%2C' + point.location.longitude + '%2C' + point.location.latitude + '&amp;layer=mapnik&amp;marker=' + point.location.latitude + '%2C' + point.location.longitude"></iframe>
          </span> 
          <br>
          <hr>         
         </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import AppModal from './AppModal.vue';
import AppTags from './AppTags.vue';

export default {
  props: ['tradePoints'],
  components: {AppTags, AppModal},  
  computed: {
    ...mapGetters(['machines'])
  }  
}
</script>

<style scoped>

.items {
  display: flex;
  justify-content: space-between;
  border-radius: 24px;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 32px 64px rgba(44, 39, 56, 0.14);
  margin: auto;
  padding: 15px;
}

</style>