<template>
  <div class="nb-carousel">
    <hooper :itemsToShow="1.25" :centerMode="true">
      <slide v-for="(card, index) in data.cards" :key="index">
        <Card :image="card.image" :title="card.title" :description="card.subtitle" size="medium">
            <template v-slot:footer>
                <Buttons :data="card" />
            </template>
        </Card>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
</template>

<script>
import Card from "../Card";
import Buttons from './Buttons'

import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";

export default {
  props: ["data"],
  components: {
    Card,
    Hooper,
    Slide,
    HooperNavigation,
    Buttons
  }
};
</script>

<style>
.nb-carousel {
    width: 500px;
}

.hooper {
    height: initial !important;
}

.hooper-slide {
    margin: 10px !important;
}

.nb-carousel * {
     outline:0;
}
</style>
