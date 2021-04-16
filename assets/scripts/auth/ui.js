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
  $('#invalid-move-message').text('')
  $('#turn-outcome-message').text('')
  $('#sign-up').show()
  $('#sign-in').show()
  store.user = null
}

// start a new game
const onNewGameSuccess = function (response) {
  store.game = response.game
  $('#game-board').show()
  $('#messages').text('New game started!')
  $('.box').text('')
  $('#invalid-move-message').text('')
  $('#turn-outcome-message').text('')
  console.log('New game button was clicked.')
}

// placing an `x` or `o` on the board
// const onMakeMoveSuccess = function (response) {
//   store.game = response.game
// }

// const onTurnSuccess = function (response) {
//   $('#xo-switch-message').text(`It is player ${currentPlayer}'s turn now!`)
// }

const onCheckWinnerSuccess = function (response) {
  if (response.game.over) {
  // store.game = response.game
  $('#turn-outcome-message').text(`Player won the game! Click 'New Game' to play again.`)
  }
}

const onTieSuccess = function () {
  // store.gameOver = true
  $('#turn-outcome-message').text("It's a tie! Click 'New Game' to play again!")
}

const onSpaceTakenSuccess = function () {
  $('#invalid-move-message').text(`Oh no, this space has already been selected. Try again!`)
}

const onError = function (err) {
  console.error(err)
  $('#messages').text('Hmm...something went wrong. Please try again!')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  // onTurnSuccess,
  // onMakeMoveSuccess,
  onCheckWinnerSuccess,
  onTieSuccess,
  onSpaceTakenSuccess,
  onError
}
