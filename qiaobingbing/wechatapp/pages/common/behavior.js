module.exports = Behavior({
  behaviors: [],
  properties: {
    behaviorProps: {
      type: String,
      value: 'Behavior properties'
    }
  },
  data: {
    behaviorData: {
      testBehaviorData: 'Behavior data'
    }
  },
  attached: function(){
    console.log('behavior attached function')
  },
  methods: {
    behaviorMethod: function(){
      console.log('method handler from behavior')
    }
  }
})