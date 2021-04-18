'use strict'
// import the functions that make requests to the api
const api = require('./api')
// import the functions that update our webpage's content
const ui = require('./ui')
// import the getFormFields function
const getFormFields = require('../../../lib/get-form-fields')

const store = require('../store')

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
  // starts player as `x` when new game button is clicked
  currentPlayer = 'X'
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}

// player must start as `x`
let currentPlayer = 'X'

// alternates `x` and `o` turns
const onMakeMove = function () {
  if (onCheckWinner()) return
  const box = $(event.target)
  const index = $(event.target).data('cell-index')
  // if box is empty, player can place move there
  if (box.text() === '') {
    box.text(currentPlayer)
    store.game.cells[index] = currentPlayer
    // placing `x`s and `o`s on the board
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    $('#game-messages').text(`It is player ${currentPlayer}'s turn now!`)
  // if space is taken, error message will appear
  } else {
    ui.onSpaceTakenSuccess()
  }

  const value = $(event.target).text()
    api.makeMove(index, value, onCheckWinner())
      .then(ui.onCheckWinnerSuccess)
      .catch(ui.onError)
    }

  // check whether `x` or `o` has won the game or if it's a tie
  const onCheckWinner = function () {
      // top row winning combos
      if ((store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[0] !== '') ||
        // middle row winning combos
       (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[4] !== '') ||
        // bottom row winning combos
       (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[7] !== '') ||
        // first column winning combos
       (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[0] !== '') ||
        // second column winning combos
       (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[1] !== '') ||
        // third column winning combos
       (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[2] !== '') ||
        // diagonal winning combos
       (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[0] !== '') ||
        // diagonal winning combos
       (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[2] !== '')) {
         return true
         // checks for tie
       } else if (store.game.cells[0] && store.game.cells[1] && store.game.cells[2] && store.game.cells[3] && store.game.cells[4] && store.game.cells[5] && store.game.cells[6] && store.game.cells[7] && store.game.cells[8]) {
         ui.onTieSuccess()
      } else {
      return false
    }
  }


module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onMakeMove,
  onCheckWinner
}
