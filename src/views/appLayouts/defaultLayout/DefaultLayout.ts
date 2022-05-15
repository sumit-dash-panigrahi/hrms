import { defineComponent } from 'vue';
import DefaultHeader from '@/components/defaultHeader/DefaultHeader.vue';
import DefaultNav from '@/components/defaultNav/DefaultNav.vue';
import DefaultModal from '@/components/defaultModal/DefaultModal.vue';
import DefaultSidebar from '@/components/defaultSidebar/DefaultSidebar.vue';
export default defineComponent({
  props: {},
  components: { DefaultHeader, DefaultNav, DefaultModal, DefaultSidebar },
  setup() {},
});
