<template>
  <div v-for="machine in machines.data" :key="machine.id">
    <div v-for="point in tradePoints" :key="point.id">
      <ul v-if="machine.tradePointId ===  point.id">
        <li class="items">
          <div class="adap">
            <div  class="flex-wrap">
              <div><strong class="number">{{ machine.serialNumber }} </strong>
                <div>
                  <app-tags :machId="machine.id"/>
                </div>

              </div>
              <div class="address">{{ point.location.address }}</div>
              <div class="floor">Этаж: {{ machine.floor }}</div>
            </div>
            <app-modal :time="point.workingTime"></app-modal>
          </div>
          <iframe
              :src="'https://www.openstreetmap.org/export/embed.html?bbox=' + point.location.longitude + '%2C' + point.location.latitude + '%2C' + point.location.longitude + '%2C' + point.location.latitude + '&amp;layer=mapnik&amp;marker=' + point.location.latitude + '%2C' + point.location.longitude"></iframe>
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

<style>

.items {
  display: flex;
  justify-content: space-between;
  border-radius: 24px;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 32px 64px rgba(44, 39, 56, 0.14);
  margin: auto;
  padding: 15px;
}

iframe {
  margin-left: auto;
}
@media (max-width: 640px) {
  .items {
    flex-direction: column;
    height: 25rem;
  }
  iframe {
    width: 100%;
    height: 100%;
    margin: auto;
  }
  .address, .floor {
    font-size: large;
  }
  .number {
    margin-left: 50%;
    font-size: large;
  }
  .adap {
    display: flex;
    justify-content: space-between;
  }
}
</style>