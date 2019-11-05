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
  multDivide(context, payload){
    context.commit('multDivide', payload)
  }
}

const mutations = {
  addSub(state, payload){
    state.number += payload;
    return state;
  },
  multDividey(state, payload){
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
const overThree = $('.div3');
const number = $('.number');
number.textContent = storeInstance.state.number.toFixed(2);

ace(addOne, () => {
  storeInstance.dispatch('addSub', 1)
})
ace(subOne, () => {
  storeInstance.dispatch('addSub', -1)
})
ace(multTwo, () => {
  storeInstance.dispatch('multDivide', 2)
})
ace(overThree, () => {
  storeInstance.dispatch('multDivide', (1/3))
})


storeInstance.subscribe(state => {
    number.textContent = state.number.toFixed(2);
});