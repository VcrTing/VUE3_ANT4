<template>
    <div>
        <a-config-provider
            :theme="theme"
        >
            <div>
                <a-button type="primary" @click="funn.changeTheme()">切换主题</a-button>
            </div>
            <slot></slot>
        </a-config-provider>
    </div>
</template>

<script setup lang="ts">
// const prp = defineProps<{}>()

const aii = reactive({
    name: 'light',
    light: {
        token: {
            colorPrimary: '#f780b4',
        },
    },
    dark: {
        token: {
            colorPrimary: '#459df0',
        },
    },
})

const funn = {
    changeTheme: () => {
        aii.name = (aii.name == 'light' ? 'dark' : 'light')
    }
}

const theme = computed(() => {
    return aii[aii.name]
})
</script>