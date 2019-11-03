<template>
  <div>
    Sum of ({{a}},{{b}}) is: {{sum()}}
  </div>
</template>

<script>
export default{
  data: function(){
    return {
      a: 1,
      b: 2
    }
  },
  methods: {
    sum: function(){
      console.info("-- in Sum.vue, this: ", this)
      return this.a + this.b
    }
  }
}
</script>
