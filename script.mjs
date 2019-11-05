import Store from './beedle.mjs';

const $ = n => document.querySelector(n);
const log = console.log;
const ace = (n, func) => n.addEventListener('click', func);

/**
 * First thing to do is to define actions
 * Then define the mutations which those actions would cause
 * Then set the initial state
 * Then create the store instance
 * The subscribe function is used to tell 
 * variables to update their values anytime state is changed
*/

const actions = {
  addSub(context, payload){
    context.commit('addSub', payload)
  },
  mult(context, payload){
    context.commit('mult', payload)
  }
}

const mutations = {
  addSub(state, payload){
    state.number += payload;
    return state;
  },
  mult(state, payload){
    state.number *= payload;
  }
}

const initialState = {
  number:15
}

const storeInstance = new Store({
  actions,
  mutations,
  initialState
})

const addOne = $('.add1');
const subOne = $('.sub1');
const multTwo = $('.mult2');
const number = $('.number');

ace(addOne, () => {
  storeInstance.dispatch('addSub', 1)
})
ace(subOne, () => {
  storeInstance.dispatch('addSub', -1)
})
ace(multTwo, () => {
  storeInstance.dispatch('mult', 2)
})


storeInstance.subscribe(state => {
    number.textContent = state.number;
});