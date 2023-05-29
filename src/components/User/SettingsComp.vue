<script setup>
function Remove(){
    window.localStorage.removeItem('token')
    location.reload()
}

</script>
<template>
    <section class="settings">
        <div class="container">
            <div class="settings__wrapper">
                <h1>Settings page</h1>
                <button @click="Remove">Remove</button>
            </div>
        </div>
    </section>
</template>