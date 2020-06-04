export default {
  data(){
    return {
      count: 500
    };
  },
  methods: {
    fn(){
      alert('bbb');
    }
  },
  template: '<div>卖家:{{count}} <input type="button" value="按钮" @click="fn" /></div>'
};
