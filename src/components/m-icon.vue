<template>
    <svg class="icon"
         aria-hidden="true">
      <use :xlink:href="'#' + link"></use>
    </svg>
</template>

<script>
export default {
    name: 'm-icon',
    props: ['link']
};
</script>
