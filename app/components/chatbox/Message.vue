<template>
    <div class="nb-chat-message-text">
        <p class="sender">
        <time>{{ sender }} {{ date | datetime }}</time>
        </p>
        <p class="text">{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: ['sender', 'date', 'text'],
    filters: {
        datetime(str) {
            return str.toLocaleString()
        }
    }
}
</script>