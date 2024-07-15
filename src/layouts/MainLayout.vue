<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="height: 75px; background-color: #1f459a">
        <q-img
          :src="'evanteklogo.jpg'"
          spinner-color="white"
          style="width: 400px"
          fit="scale-down"
        />

        <div class="full-width">
          <div class="row">
            <div class="col col-md-4 q-px-xs-sm q-px-md-md">
              <q-btn
                rounded
                size="xl"
                color="white"
                class="full-width"
                text-color="black"
                label="Home"
              />
            </div>
            <div class="col col-md-4 q-px-xs-sm q-px-md-md">
              <q-btn
                rounded
                size="xl"
                color="white"
                class="full-width"
                text-color="black"
                label="WSP"
              />
            </div>
            <div class="col col-md-4 q-px-xs-sm q-px-md-md">
              <q-btn
                rounded
                size="xl"
                color="white"
                class="full-width"
                text-color="black"
                label="Enquiry"
              />
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-footer elevated class="bg-light-blue">
      <q-toolbar style="background-color: #1f459a">
        <q-toolbar-title></q-toolbar-title>

        <div>©{{ year }} Evantek</div>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { date } from 'quasar';
import { ref } from 'vue';
const timeStamp = Date.now();
const year = date.formatDate(timeStamp, 'YYYY');
</script>
