'use strict'

const store = require('../store')

const onSignUpSuccess = function () {
  $('#messages').text('Thanks for signing up!')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#messages').text('Successfully signed in!')
  $('#change-password').show()
  $('#sign-out').show()
  $('#new-game').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#messages').text('Password changed successfully!')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#messages').text('Signed out successfully!')
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#new-game').hide()
  $('#game-board').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  store.user = null
}

// start a new game
const onNewGameSuccess = function (response) {
  store.user.game = response.game
  $('#messages').text('New game started!')
}

// clicking on a space that will leave either an `x` or `o`
let currentPlayer = 'x'
const onMakeMoveSuccess = function (event) {
  $('#messages').text("You've made a move!")
  const cell = event.target.id
  box.text(currentPlayer)
  currentPlayer = currentPlayer === 'o' ? 'x' : 'o'
}

const onError = function (err) {
  console.error(err)
  $('#messages').text('Something went wrong, please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  onMakeMoveSuccess,
  onError
}
