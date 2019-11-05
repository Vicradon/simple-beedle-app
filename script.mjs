import Store from './beedle.mjs';

// Set actions, mutations and initial state
const actions = {
    saySomething(context, payload) {
        context.commit('setMessage', payload);
    },
    clickButton(context, payload){
      context.commit('clickButton', payload)
    }
};

const mutations = {
    setMessage(state, payload) {
        state.message = payload;
        return state;
    },
    clickButton(state, payload){
      state.buttonMessage = payload;
      return state
    }
};

const initialState = {
   message: 'Hello, world',
   buttonMessage:" I'm the button message"
};

// Create our store instance
const storeInstance = new Store({
    actions,
    mutations,
    initialState
});

const $ = n => document.querySelector(n);
const log = console.log;

// Grab the textearea and dispatch the action on 'input'
const textElement = $('textarea');
const button = $('#button');

button.addEventListener('click', () => {
  storeInstance.dispatch('clickButton', "The message from the button")
})

textElement.addEventListener('input', () => {

    // Dispatch the action, which will subsequently pass this message to the mutation
    // which in turn, updates the store's state
    storeInstance.dispatch('saySomething', textElement.value.trim());
});

// Grab the text element and attach it to the stateChange event
const messageElement = $('.js-message-element');
const otherParagraph = $('#other-paragraph');


// This fires every time the state updates
storeInstance.subscribe(state => {
    messageElement.innerText = state.message;
});

storeInstance.subscribe(state => {
  otherParagraph.textContent = state.buttonMessage;
})