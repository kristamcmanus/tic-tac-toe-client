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
  // player must start as `x`
  let currentPlayer = 'x'
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}

// choose available cell on board and placing either `x` or `o`
const onMakeMove = function (event) {
  event.preventDefault()
  // find cell the player picked by its `id`
  const index = event.target.id
  $(event.target).text('x or o')
  api.makeMove()
    .then(ui.onMakeMoveSuccess)
    .catch(ui.onError)
}

// player must start as `x`
// let currentPlayer = 'x'
// const onMakeMove = function (event) {
//   const cell = $(event.target)
//   const cellIndex = $(event.target).data('data-cell-index')
//   const value = cell.text()
//   const id = store.game._id
//
//   if (value === 'x' || value === 'o') {
//     $('#invalid-space').text('Space has already been chosen!')
//   } else {
//     if (currentPlayer === 'x') {
//       currentPlayer = 'o'
//     } else {
//       currentPlayer = 'x'
//     }
//   }
//   event.preventDefault()
//   // find cell the player picked by its `id`
//   const index = event.target.id
//   $(event.target).text('x or o')
//   api.makeMove(id, formData)
//     .then(ui.onMakeMoveSuccess)
//     .catch(ui.onError)
// }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onMakeMove
}
