<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated v-if="$q.platform.is.desktop">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <header v-if="$q.platform.is.mobile">
      <m-header />
    </header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      v-if="$q.platform.is.desktop"
    >
      <q-list>
        <q-item-label header class="text-grey-8"> Essential Links </q-item-label>
        <!-- <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" /> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <q-tabs v-if="$q.platform.is.mobile" class="full-width row absolute-bottom">
  <q-route-tab
    icon="home"
    to="/"
    class="col-3 q-px-none"
    label="главная"
    content-class="Jura-medium"
    exact
  />
  <q-route-tab
    icon="date_range"
    to="/plan"
     label="программа"
       class="col-3 q-px-none"
       content-class="Jura-medium"
    exact
  />
    <q-route-tab
    icon="menu_book"
    to="/support"
      class="col-3 q-px-none"
     label="поддержка"
       content-class="Jura-medium"
    exact
  />
  <q-route-tab
    icon="chat"
    to="/chat"
      class="col-3 q-px-none"
     label="чат"
       content-class="Jura-medium"
    exact
  />
</q-tabs>
    </q-page-container>
    
  </q-layout>
</template>

<script>
// import EssentialLink from "components/EssentialLink.vue";
export default {
  name: "mainlayout",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  mounted() {
    console.log(this.$q.platform);
  },
};
</script>
