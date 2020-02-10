import { Plugins } from "@capacitor/core";

const { Geolocation } = Plugins;

export default {
    methods: {
        async click(btn) {
            if (typeof btn == 'string') {
                btn = {
                    title: btn
                }
            }
            if (btn.url) {
                window.open(btn.url, "_blank");
            } else if (btn.postback) {
                this.$store.commit("addUserMessage", btn.postback);
            } else if (btn.phone_number) {
                window.open(`tel:${btn.phone_number}`);
            } else if (btn.location) {
                const { coords } = await Geolocation.getCurrentPosition();
                this.$bus.$emit("send", {
                    geo: coords
                });
            } else {
                this.$store.commit("addUserMessage", btn.title);
            }
        }
    }
}