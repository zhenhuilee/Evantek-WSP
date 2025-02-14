<template>
  <div class="row justify-center">
    <div class="q-pa-md col-md-8 col-sm-10">
      <q-carousel
        ref="carousel"
        v-model="slide"
        vertical
        transition-prev="slide-down"
        transition-next="slide-up"
        animated
        control-color="black"
        padding
        arrows
        class="rounded-borders homepage-carousel"
        infinite
        :autoplay="autoplay"
        @mouseenter="autoplay = 0"
        @mouseleave="autoplay = 8000"
        transition-duration="1000"
        height="auto"
      >
        <q-carousel-slide name="about-us" class="column no-wrap flex-center">
          <h4 class="header">About Us</h4>
          <div class="slide-desc">
            <p>
              Since 1995, Evantek Pte Ltd has built a reputation as a top
              solutions provider, recognized for its thorough process from
              project planning to training, including design, development, and
              installation. Evantek has a successful history of creating
              creative products and solutions in industrial product design,
              commercial display systems, transportation systems,
              telecommunications, and lifecycle management, with a focus on
              meeting customer needs. Evantek specializes in system integration
              services, providing reliable solutions and guaranteeing strong
              customer satisfaction in Singapore and the surrounding area.
            </p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="our-vision" class="column no-wrap flex-center">
          <h2 class="header">Our Vision</h2>
          <div class="slide-desc">
            <p>
              Here at Evantek, we develop and drive innovation ideals in order
              to utilise the effectiveness of modern technology to set new
              standards in the service industry. We strive to be the leading
              system integrator providing state-of-art technology. Setting new
              benchmarks and pioneering standards of practice in the world wide
              market along the way.
            </p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="our-clients" class="column no-wrap flex-center">
          <h2 class="header">Our Clients</h2>
          <div class="slide-desc q-mb-lg">
            <p>
              We have many clients such as leaders of Singapore's healthcare
              industry, banking and insurance industry, government ministries
              and organizations, education institutions and leading business
              organizations. Some examples are shown below.
            </p>
          </div>
          <div class="w-100">
            <div class="row list">
              <div
                v-for="(client, index) in clients"
                :key="index"
                class="col-6 col-md-4 col-lg-3 list-item"
              >
                <img :src="client.imageUrl" :alt="client.name" />
              </div>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="our-partners"
          class="column no-wrap flex-center"
        >
          <h2 class="header">Our Partners</h2>
          <div class="slide-desc q-mb-lg">
            <p>
              Our partnerships enable us to offer cutting-edge technology,
              enhanced service capabilities, and comprehensive solutions to meet
              the diverse needs of our clients. By collaborating with industry
              leaders, we ensure that our clients receive the best possible
              outcomes.
            </p>
          </div>
          <div class="w-100">
            <div class="row list partners-list">
              <div
                v-for="(partner, index) in partners"
                :key="index"
                class="col-6 col-md-4 col-lg-3 list-item"
              >
                <img
                  :src="partner.imageUrl"
                  :alt="partner.name"
                  fit="scale-down"
                  :class="partner?.class ? partner.class : ''"
                />
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import { Todo, Meta } from 'components/models';
// import { useRouter } from 'vue-router'; // Import Vue Router

// const router = useRouter(); // Initialize Vue Router
const slide = ref('about-us');
const autoplay = ref(8000);

const clients = ref([
  {
    name: 'DBS',
    imageUrl: '/images/clients/dbs-logo.svg',
  },
  {
    name: 'UOB',
    imageUrl: '/images/clients/uob-logo.svg',
  },
  {
    name: 'LTA',
    imageUrl: '/images/clients/lta-logo.png',
  },
  {
    name: 'ICA',
    imageUrl: '/images/clients/ica-logo.svg',
  },
  {
    name: 'SG Courts',
    imageUrl: '/images/clients/sg-courts.png',
  },
  {
    name: 'NParks',
    imageUrl: '/images/clients/nparks-logo.png',
  },
  {
    name: 'KKH',
    imageUrl: '/images/clients/kkh.png',
  },
  {
    name: 'HDB',
    imageUrl: '/images/clients/hdb-logo.png',
  },
  {
    name: 'RP',
    imageUrl: '/images/clients/rp.png',
  },
  {
    name: 'NYP',
    imageUrl: '/images/clients/nyp.svg',
  },
  {
    name: 'SIA',
    imageUrl: '/images/clients/sia-logo.svg',
  },
  {
    name: 'SIM',
    imageUrl: '/images/clients/sim.svg',
  },
]);

const partners = ref([
  {
    name: 'Samsung',
    imageUrl: '/images/partners/samsung.svg',
  },
  {
    name: 'AWS',
    imageUrl: '/images/partners/aws-logo.svg',
    class: 'aws-logo',
  },
  {
    name: 'LG',
    imageUrl: '/images/partners/lg.svg',
    class: 'lg-logo',
  },

  {
    name: 'Huawei',
    imageUrl: '/images/partners/huawei-logo.webp',
  },
  {
    name: 'Deeeplabs',
    imageUrl: '/images/partners/deeeplabs-logo.webp',
  },
  {
    name: 'Cloud Kinetics',
    imageUrl: '/images/partners/cloud-kinetics-logo.svg',
  },
  {
    name: 'Johnson Controls',
    imageUrl: '/images/partners/johnson-controls-logo.svg',
  },
  {
    name: 'Daktronics',
    imageUrl: '/images/partners/daktronics-logo.svg',
    class: 'daktronics-logo',
  },
  {
    name: 'Dell',
    imageUrl: '/images/partners/dell-logo.svg',
  },
  {
    name: 'Bosch',
    imageUrl: '/images/partners/bosch-logo.svg',
  },
  {
    name: 'Bose',
    imageUrl: '/images/partners/bose-logo.svg',
  },
  {
    name: 'Extron',
    imageUrl: '/images/partners/extron-logo.svg',
    class: 'negative-margin',
  },
]);

defineOptions({
  name: 'IndexPage',
});
</script>
