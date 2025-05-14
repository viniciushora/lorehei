<template>
  <ul class="menu-list">
    <li
      v-for="(item, index) in itens"
      :key="index"
      class="list-item"
      @click="handleClick(item)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script lang="ts" src="@/components/MenuList.ts"></script>

<style scoped src="@/styles/MenuList.css"></style>
