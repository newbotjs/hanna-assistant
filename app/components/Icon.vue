<template>
    <div class="nb-icon">
        <i :data-eva="name" data-eva-fill="#aaa"></i>
    </div>
</template>

<script>
import * as eva from 'eva-icons';

export default {
    props: ['name'],
    mounted() {
        eva.replace()
    }
}
</script>