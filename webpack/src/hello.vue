<template>
    <div>
        我是vue代言人 - {{username}}
    </div>
</template>

<script>
    export default {
        name: 'Hello',
        data() {
            return {
                username: 'Leo'
            }
        }
    }
</script>