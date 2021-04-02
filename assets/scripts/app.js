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
  $('#game-board').hide()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
  $('#new-game').on('click', events.onNewGame)
  // select each id for every cell
  $('#cell-0').data('click', events.onMakeMove)
  $('#cell-1').data('click', events.onMakeMove)
  $('#cell-2').data('click', events.onMakeMove)
  $('#cell-3').data('click', events.onMakeMove)
  $('#cell-4').data('click', events.onMakeMove)
  $('#cell-5').data('click', events.onMakeMove)
  $('#cell-6').data('click', events.onMakeMove)
  $('#cell-7').data('click', events.onMakeMove)
  $('#cell-8').data('click', events.onMakeMove)
})
