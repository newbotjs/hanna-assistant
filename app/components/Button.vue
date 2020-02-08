<template>
    <button nbButton :class="classes" v-on="$listeners"><slot></slot></button>
</template>

<script>
export default {
    props: {
        status: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: 'medium'
        },
        shape: {
            type: String,
            default: 'rectangle'
        },
        appearance: {
            type: String,
            default: 'filled'
        },
        fullWidth: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes() {
            return {
                [`status-${this.status}`]: true,
                [`size-${this.size}`]: true,
                [`shape-${this.shape}`]: true,
                [`appearance-${this.appearance}`]: true,
                'full-width': this.fullWidth
            }
        }
    }
}
</script>