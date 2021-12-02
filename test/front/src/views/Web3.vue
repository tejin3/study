<template>
  <div>
    <button @click="first()">web3</button>
  </div>
</template>
<script>
import web3 from '../web3/index'
export default {
  name: '',
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    first() {
      web3()
    }
  }
}
</script>
