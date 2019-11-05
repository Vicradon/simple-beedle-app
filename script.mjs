import Store from './beedle.mjs';

const $ = n => document.querySelector(n);
const log = console.log;
const ace = (n, func) => n.addEventListener('click', func);

const actions = {
  colorClick(context, payload){
    context.commit('handleClick', payload)
  },
  textInput(context, payload){
    context.commit('handleChange', payload)
  }
}
const mutations = {
  handleClick(state, payload){
    state.color = payload.color;
    state.coloredText = payload.text;
    return state;
  },
  handleChange(state, payload){
    state.preText = payload;
    return state;
  }
}


const initialState = {
  color:'',
  coloredText:'black',
  preText:'I am',
}

const storeInstance = new Store({ 
  actions, mutations, initialState 
})

const nodes = {
  red:$('.red'), 
  blue:$('.blue'), 
  green:$('.green'),
  titleSetter:$('#title-setter'),
  title:$('#title'),
  textColor:$('#text-color')
}
const {red, blue, green, title, titleSetter, textColor } = nodes;

title.textContent = storeInstance.state.preText;
titleSetter.value = storeInstance.state.preText;
textColor.textContent = storeInstance.state.coloredText;

ace(red, () => {
  storeInstance.dispatch('colorClick', {color:'red', text:'red'})
})
ace(green, () => {
  storeInstance.dispatch('colorClick', {color:'green', text:'green'})
})
ace(blue, () => {
  storeInstance.dispatch('colorClick', {color:'blue', text:'blue'})
})
titleSetter.addEventListener('input', () => {
  storeInstance.dispatch('textInput', titleSetter.value)
})


storeInstance.subscribe(state => {
  textColor.style.color = state.color;
  textColor.textContent = state.coloredText;
  title.textContent = state.preText;
  titleSetter.value = state.preText;
})