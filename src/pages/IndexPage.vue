<template>
  <q-page class="row">
    <iframe
      class="full-width"
      src="https://docs.google.com/forms/d/e/1FAIpQLScvZxqEXWXqAZXvymWcRIOV3u0qs20TkUr7CO__th0yI8RcJg/viewform"
    ></iframe>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { useRouter } from 'vue-router'; // Import Vue Router

const router = useRouter(); // Initialize Vue Router

defineOptions({
  name: 'IndexPage',
});
router.push('/enquiry');
</script>
