<script setup>
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router';
const router = useRouter()
let token = window.localStorage.getItem('token')
if(!token){
    router.push({ path: '/login'})
}
</script>

<template>
  <RouterView />
</template>
