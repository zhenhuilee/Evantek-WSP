<template>
  <div class="row justify-center">
    <div class="q-px-md career">
      <h2 class="header">Career Opportunity</h2>
      <div class="section-desc">
        <p class="">
          At Evantek, you can look forward to many exciting career
          opportunities!
        </p>
      </div>
    </div>
  </div>

  <div class="row justify-center">
    <div class="opportunities-carousel">
      <!-- <h2 class="header" align="center">Our Current WSP Student</h2>
      <div class="section-desc">
        <p class="">
          Let's spend some time to hear what our current WSP student has to say!
          <br />
        </p>
      </div> -->

      <q-carousel
        v-model="opportunityCarousel"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="black"
        navigation-icon="radio_button_unchecked"
        padding
        arrows
        class="rounded-borders"
        :autoplay="autoplay"
        @mouseenter="autoplay = 0"
        @mouseleave="autoplay = 8000"
        infinite
        transition-duration="1000"
        height="auto"
      >
        <q-carousel-slide
          :key="index"
          v-for="(opportunity, index) in opportunities"
          :name="opportunity.name"
          class="column no-wrap flex-center"
        >
          <q-card class="roles-card">
            <q-card-section class="">
              <div class="icon">
                <img
                  class="svg-icon"
                  :src="opportunity.iconUrl"
                  :alt="opportunity.iconName"
                />
              </div>
              <div class="card-header">{{ opportunity.role }}</div>
              <div class="card-desc">
                <p>{{ opportunity.description }}</p>
              </div>
            </q-card-section>
          </q-card>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>

  <div class="row justify-center">
    <div class="testimonial-carousel">
      <q-carousel
        ref="testimonial"
        v-model="slide2"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="black"
        navigation-icon="radio_button_unchecked"
        padding
        arrows
        class="rounded-borders"
        :autoplay="testimonialAutoplay"
        @mouseenter="testimonialAutoplay = 0"
        @mouseleave="testimonialAutoplay = 8000"
        infinite
        transition-duration="1000"
        height="auto"
      >
        <q-carousel-slide
          name="testimonial1"
          class="column no-wrap flex-center"
        >
          <q-card class="testimonial-card" bordered>
            <q-card-section horizontal style="height: auto">
              <div class="q-pa-lg testimonial-photo">
                <q-avatar size="200px" font-size="52px">
                  <img src="images/testimonials/hafidz.jpg" />
                </q-avatar>
              </div>

              <q-card-section class="q-pa-lg">
                <div class="testimonial-header">
                  Testimonial from our WSP graduate
                </div>
                <p class="testimonial-text">
                  "If you are unsure of your next step after graduation,
                  consider taking a Specialist Diploma! The Specialist Diploma
                  in DevOps have successfully honed my skills in app development
                  through real world application in Evantek and the modules I
                  took in school."
                </p>
                <div align="right">
                  <div class="testimonial-user">
                    - Hafidz Aizuddin Bin Ab Rasid
                  </div>
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </q-carousel-slide>

        <q-carousel-slide
          name="testimonial2"
          class="column no-wrap flex-center"
        >
          <q-card class="testimonial-card" bordered>
            <q-card-section horizontal style="height: auto">
              <div class="q-pa-lg testimonial-photo">
                <q-avatar size="200px" font-size="52px">
                  <img src="images/testimonials/Iqbal.jpg" />
                </q-avatar>
              </div>

              <q-card-section class="q-pa-lg">
                <div class="testimonial-header">
                  Testimonial from our WSP graduate
                </div>
                <p class="testimonial-text">
                  "Balancing between work and school was challenging yet
                  fulfilling at the same time. It requires lots of resilience
                  and self-discipline. I have gained many soft and technical
                  skills which is useful in my future career. I am grateful for
                  the supportive environment where I could grow and contribute
                  positively."
                </p>
                <div align="right">
                  <div class="testimonial-user">
                    - Muhammad Iqbal Bin Shafie
                  </div>
                </div>
              </q-card-section>
            </q-card-section>
          </q-card>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import Testmonials from 'components/Testmonials.vue';
// import { Todo, Meta } from 'components/models';
// import { useRouter } from 'vue-router'; // Import Vue Router

// const router = useRouter(); // Initialize Vue Router
// const slide = ref('devops-engineer');
const autoplay = ref(8000);
const testimonialAutoplay = ref(8000);

const opportunityCarousel = ref('devops');
const slide2 = ref('testimonial1');

const opportunities = ref([
  {
    name: 'devops',
    role: 'DevOps Engineer',
    description:
      'A DevOps engineer plays a crucial role in bridging the gap between development and IT operations, fostering collaboration among software developers, system operators, and other IT staff to manage code releases efficiently. They focus on automating processes for software deployment, system updates, and infrastructure management, often implementing and managing Continuous Integration/Continuous Deployment (CI/CD) pipelines to ensure seamless code integration and rapid deployment.',
    iconUrl: '/images/globe.svg',
    iconName: 'globe icon',
  },
  {
    name: 'software',
    role: 'Software Developer',
    description:
      'A Software Developer is a professional who designs, codes, tests, and maintains software applications or systems. They work with various programming languages and tools to develop software that meets user needs and requirements. Software Developers can specialize in areas such as web, mobile, or desktop applications, and may work on both the front-end and back-end of software systems. They collaborate with other developers, designers, and stakeholders to ensure the software is functional, efficient, and user-friendly. Their role also includes debugging and updating software to improve performance and fix issues.',
    iconUrl: '/images/anchor.svg',
    iconName: 'anchor icon',
  },
  {
    name: 'full-stack',
    role: 'Full Stack Developer',
    description:
      'A Full Stack Developer is a versatile professional skilled in both front-end and back-end development. They build and maintain complete web applications, handling everything from user interfaces (using HTML, CSS, and JavaScript) to server-side logic (with frameworks like Node.js or Django) and database management. They ensure applications are responsive, secure, and performant. Additionally, they manage version control, deploy applications to cloud services, and collaborate with cross-functional teams to deliver comprehensive software solutions',
    iconUrl: '/images/feather.svg',
    iconName: 'feather icon',
  },
  {
    name: 'uiux',
    role: 'UI/UX Designer',
    description:
      'A UI/UX Designer is responsible for creating intuitive, user-friendly, and aesthetically pleasing interfaces for digital products. They focus on understanding user behavior and needs to design seamless user experiences (UX) and visually engaging user interfaces (UI). This involves conducting user research, creating wireframes and prototypes, and collaborating with developers to implement designs. Their goal is to enhance user satisfaction and interaction by making products accessible, efficient, and enjoyable to use.',
    iconUrl: '/images/lightning.svg',
    iconName: 'lightning icon',
  },
]);

defineOptions({
  name: 'IndexPage',
});
</script>
