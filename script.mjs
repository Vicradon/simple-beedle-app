import app from './testMoule.mjs'
const $ = n => document.querySelector(n);
const log = console.log;

$('#entered-text').textContent = app;
 

/*import Store from './beedle.mjs';

const actions = {
  typeStuff(context, payload) {
    context.commit('setText', payload)
  }
}

const mutations = {
  setText(state, payload){
    state.text = payload;

    return state;
  }
}

const initState = {
  text:'New text would appear here'
}

const storeInstance = new Store({
  actions,
  mutations,
  initState
})

const $ = n => document.querySelector(n);

const inpElem = $('#inp-elem');

inpElem.addEventListener('input', () => {
  storeInstance.dispatch('typeStuff', inpElem.value.trim());
})
const parElem = $('#entered-text');


storeInstance.subscribe(state => {
  parElem.innerText = state.message;
});
*/