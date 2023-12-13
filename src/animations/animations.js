export const animateTextFromLeft = {
  visible:(custom)=>({
    opacity:1,
    x:0,
    transition:  {
      duration: .1,
      delay: custom * 0.1
    }
  }),
  hidden:{
    opacity:0,
    x:-100
  }
}

export const animateTextFromRight = {
  visible:(custom)=>({
    opacity:1,
    x:0,
    transition:  {
      duration: .2,
      delay: custom * 0.1
    }
  }),
  hidden:{
    opacity:0,
    x:300
  }
}
