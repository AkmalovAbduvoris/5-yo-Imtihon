<script setup>
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router';
const router = useRouter()
let token = window.localStorage.getItem('token')
if(!token){
    location.href = '/'
}
</script>

<template>
  <RouterView />
</template>
