<template>
  <a :href="disabled ? null : href" @click="handleLinkClick">
    <span><slot></slot></span>
  </a>
</template>

<script>
export default {
  name: 'LCLink',
  props: {
    disabled: Boolean,
    href: String
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleLinkClick = (evt) => {
      if (!props.disabled) {
        if (!props.href) {
          emit('click', evt);
        }
      }
    };
    return {
      handleLinkClick
    };
  }
};
</script>

<style lang="scss" scoped></style>
