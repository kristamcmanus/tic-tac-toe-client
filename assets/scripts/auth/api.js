'use strict'
// this file contains the functions that make requests to the API
// import our apiUrl from the config file
const config = require('../config')
const store = require('../store')

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
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const makeMove = function (index, value, gameOver) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' +store.game._id,
    headers: {
      Authorization: 'Bearer ' +  store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: gameOver
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  newGame,
  makeMove
}
