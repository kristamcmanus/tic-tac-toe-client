curl "https://tic-tac-toe-api-development.herokuapp.com/games/:id" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{}'

echo
