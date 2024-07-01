<script setup>
  const posts = ref( await getPosts() );
</script>

<template>
  <div>{{ posts }}</div>
</template>