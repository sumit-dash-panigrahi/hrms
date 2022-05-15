import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import DefaultLayout from '@/views/appLayouts/defaultLayout/DefaultLayout.vue';
export default defineComponent({
  props: {},
  components: { RouterView, DefaultLayout },
  setup() {},
});
