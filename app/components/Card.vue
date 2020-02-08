<template>
    <div class="nb-card" :class="classes">
        <div class="picture" :style="imageUrl"></div>
        <div class="details">
            <div class="h4">{{title}}</div>
            <div class="description">
                {{description}}
            </div>
        </div>
        <div class="nb-card-footer vertical-buttons">
            <slot name="footer"></slot>
        </div>
    </div>
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
        image: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    },
    computed: {
        classes() {
            return {
                [`status-${this.status}`]: true,
                [`size-${this.size}`]: true
            }
        },
        imageUrl() {
            return {
                'background-image': `url(${this.image})`
            }
        }
    }
}
</script>

<style>
.nb-card .picture {
    background-position: center;
    background-size: cover;
    position: relative;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    flex: 1;
}

.nb-card .details {
    padding: 1rem 1.25rem;
}

.nb-card {
    display: flex;
    flex-direction: column;
    width: 400px;
}

.nb-card-footer.vertical-buttons {
    padding: 0 !important;
}

.nb-card-footer.vertical-buttons .nb-chat-buttons {
    margin: 0 !important;
}
</style>