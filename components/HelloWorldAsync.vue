<script setup>
  const response = await (
    Promise.resolve(
      'Hello, World!'
    )
  );

  const text = ref( response );
</script>

<template>
  <div>{{ text }}</div>
</template>