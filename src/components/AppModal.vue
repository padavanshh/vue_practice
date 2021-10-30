<template >
  <div class="modal" @click="modal = false" v-if="modal">
    <strong>Режим работы</strong>    
      <ul>
        <li>Понедельник: {{time.mon}}</li>
        <li>Вторник: {{time.tue}}</li>
        <li>Среда: {{time.wed}}</li>
        <li>Четверг: {{time.thu}}</li>
        <li>Пятница: {{time.fri}}</li>
        <li>Суббота: {{time.sat}}</li>
        <li>Воскресенье: {{time.sun}}</li>
      </ul>  
    </div>
  <button @click="modal = true">Время работы</button>
</template>

<script>

export default {
  props: ['time'],
  emits: ['close'],
  data() {
    return {
      modal: false      
    }
  }  
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 60px;
    width: 600px;
    padding: 1rem;
    background: #fff;
    z-index: 1000;
    left: 50%;
    border-radius: 40px;
    transform: translateX(-50%);
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
}
button {
  width: content-box;
  height: 40px;
  background: #0880AE;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  line-height: 21px;
  color: #EBF4F8;
  font-style: normal;
}
</style>