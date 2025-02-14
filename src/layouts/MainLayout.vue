<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: #1f459a">
        <router-link to="/" class="gt-sm">
          <q-img
            :src="'evanteklogo.jpg'"
            spinner-color="white"
            style="width: 400px; height: 75px"
            fit="scale-down"
          />
        </router-link>

        <router-link to="/" class="lt-md brand-logo">
          <img
            src="/evanteklogo.jpg"
            style="height: 75px"
            @click="router.push('/')"
          />
        </router-link>

        <div class="nav-tabs">
          <div class="q-gutter-y-md" style="max-width: 700px">
            <q-tabs v-model="tab" dense class="text-white">
              <q-tab name="home" label="Home" @click="home()" />
              <q-tab name="wsp" label="WSP" @click="wsp()" />
              <q-tab name="enquiry" label="Enquiry" @click="enquiry()" />
            </q-tabs>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <div class="evantek-qr-section">
      <img class="qr-code" src="/qr-code.png" alt="Evantek WSP QR" />
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="vertical-qr-container">
      <div class="vertical-qr">
        <img class="qr-code" src="/qr-code.png" alt="Evantek WSP QR" /> 
      </div>
    </div>

    <q-footer class="bg-light-blue">
      <q-toolbar style="background-color: #1f459a">
        <q-toolbar-title></q-toolbar-title>

        <div>©{{ year }} Evantek</div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { date } from 'quasar';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const timeStamp = Date.now();
const year = date.formatDate(timeStamp, 'YYYY');
const router = useRouter(); // Initialize vue-router

const tab = ref('home');
const home = () => {
  router.push('/'); //
};

const wsp = () => {
  router.push('/wsp'); //
};

const enquiry = () => {
  router.push('/enquiry'); //
};
</script>
