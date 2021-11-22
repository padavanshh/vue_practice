<template>
    <div id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';

export default {
  props: ['tradePoints'],
  data() {
    return{
      center: [55.7887, 49.1221]
    }},
  methods: {
    setupLeafletMap: function () {
      const mapDiv = L.map("mapContainer").setView(this.center, 2);
      L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapDiv);

      // let hydMarker = new L.Marker([55.778973, 49.109917]);
      // let vskpMarker = new L.Marker([55.781205, 49.126078]);
      // let vjwdMarker = new L.Marker([55.781205, 49.126078]);
      //
      // let layerGroup = L.layerGroup([hydMarker, vskpMarker, vjwdMarker]);
      //
      // layerGroup.addTo(mapDiv);

      let DefaultIcon = L.icon({
        iconUrl: icon
      });

      L.Marker.prototype.options.icon = DefaultIcon;

      for (let i = 0; i < this.tradePoints.length; i++) {
       let marker = new L.marker([this.tradePoints[i].location.latitude,this.tradePoints[i].location.longitude])
            marker.addTo(mapDiv);

        let southWest = L.latLng(this.tradePoints[i].location.latitude,this.tradePoints[i].location.longitude),
            northEast = L.latLng(this.tradePoints[i].location.latitude,this.tradePoints[i].location.longitude),
            bounds = L.latLngBounds(southWest, northEast);

        mapDiv.flyToBounds(bounds);
      }

      // let southWest = L.latLng(55.7589, 49.1197),
      //     northEast = L.latLng(55.7877, 49.1221),
      //     bounds = L.latLngBounds(southWest, northEast);
      //
      // mapDiv.flyToBounds(bounds);
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style scoped>
#mapContainer {
  height: 60vh;
}
</style>