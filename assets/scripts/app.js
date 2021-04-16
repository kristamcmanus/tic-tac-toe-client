'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

//handles event delegation - tells JS to listen for this event and fire this function

const events = require('./auth/events')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#game-board').hide()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
  // shows game board when `New Game` button is clicked
  $('#new-game').on('click', events.onNewGame)
  // $('#game-board').on('click', events.onMakeMove)
  // displays `x` and `o` on board when boxes are clicked
  $('.box').on('click', events.onMakeMove)
})
