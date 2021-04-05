'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./auth/events')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#new-game').hide()
  // $('#game-board').hide()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
  $('#new-game').on('click', events.onNewGame)
  // select each id for every cell
  $('#0').on('click', events.onMakeMove)
  $('#1').on('click', events.onMakeMove)
  $('#2').on('click', events.onMakeMove)
  $('#3').on('click', events.onMakeMove)
  $('#4').on('click', events.onMakeMove)
  $('#5').on('click', events.onMakeMove)
  $('#6').on('click', events.onMakeMove)
  $('#7').on('click', events.onMakeMove)
  $('#8').on('click', events.onMakeMove)
})
