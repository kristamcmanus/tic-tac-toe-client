curl "https://tic-tac-toe-api-development.herokuapp.com/games/:id" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{}'

echo
