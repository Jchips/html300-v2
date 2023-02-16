export default {
  // const showBorder = {
    data () {
      return {
        isHidden: false
      }
    },
    methods: {
      toggleBorder() {
        // if(this.isHidden) {
        //   let img = document.querySelectorAll('.company-img');
        //   console.log(img.classList);
        //   // img.classList.toggle("border");
        // }     
        this.isHidden = !this.isHidden;
      }
    }
  // }
}