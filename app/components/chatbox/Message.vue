<template>
    <div class="nb-chat-message-text">
        <p class="sender">
        <time>{{ sender }} {{ date }}</time>
        </p>
        <p class="text">{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: ['sender', 'date', 'text']
}
</script>