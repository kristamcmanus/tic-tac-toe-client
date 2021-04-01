'use strict'

const store = require('./store')

const onSignUpSuccess = function () {
  $('#messages').text('Thanks for signing up!')
}

const onSignInSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#messages').text('Successfully signed in!')
  // $('#sign-up').hide()
  // $('#sign-in').hide()
  // $('#sign-in').trigger('reset')
}

const onError = function (err) {
  $('#messages').text('Something went wrong, please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onError
}
