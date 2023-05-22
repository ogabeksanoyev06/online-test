<template>
  <validation-observer tag="form" ref="form" @submit.prevent="onSubmit">
    <slot/>
  </validation-observer>
</template>

<script>
  import {ValidationObserver} from 'vee-validate';
  export default {
    name: "AppForm",
    components: { ValidationObserver },
    props: {
      scrollToError: Boolean
    },
    methods: {
      async onSubmit() {
        const isValid = await this.$refs.form.validate();
        if(isValid) {
          this.$emit('submit');
        } else {
          if (this.scrollToError) this.scrollToInvalidInput();
        }
      },
      scrollToInvalidInput() {
        const observer = this.$refs.form;
        setTimeout(() => {
          const errors = Object.entries(observer.errors)
            .map(([key, value]) => ({key, value}))
            .filter(error => error["value"].length);
          observer.refs[errors[0]["key"]].$el.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }, 100);
      },
    }
  }
</script>

<style scoped>

</style>