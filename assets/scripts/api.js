'use strict'
// this file contains the functions that make requests to the API
// import our apiUrl from the config file
const config = require('./config')
const store = require('./store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + 'sign-in',
    data: formData
  })
}

module.exports = {
  signUp,
  signIn
}
