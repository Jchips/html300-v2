export default {
  data () {
    return {
      isHidden: false
    }
  },
  methods: {
    toggleBorder() {    
      this.isHidden = !this.isHidden;
    }
  }
}