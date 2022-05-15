import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'GlobalModalComponent',
  props: {},
  components: {},
  setup() {
    let isVisible = ref(true);
    function toggle(): void {
      isVisible.value = !isVisible.value;
    }
    return { isVisible, toggle };
  },
});
