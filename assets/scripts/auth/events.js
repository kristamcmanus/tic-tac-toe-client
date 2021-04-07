'use strict'
// import the functions that make requests to the api
const api = require('./api')
// import the functions that update our webpage's content
const ui = require('./ui')
// import the getFormFields function
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  // prevents page from refreshing when button is clicked
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onError)
}

const onSignOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

// starting new game
const onNewGame = function () {
  event.preventDefault()
  // display game board when new game starts
  $('#game-board').show()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}

// player must start as `x`
let currentPlayer = 'X'
const onMakeMove = function (event) {
  const box = $(event.target)
  const index = event.target.id
  // if box is empty, player can place move there
  if (box.text() === '') {
    box.text(currentPlayer)
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    $('#xo-switch-message').text(`It is player ${currentPlayer}'s turn now!`)
  // if it is taken, error message will appear
  } else {
    $('#invalid-move-message').text('Invalid Move: Space has already been selected.')
  }
  $(event.target).data(index, 'value')
  api.makeMove()
    .then(ui.onMakeMoveSuccess)
    .catch(ui.onError)
  }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onMakeMove
}
