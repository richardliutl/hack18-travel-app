curl --data 'response_type=code' 'http://web.chal.csaw.io:9000/oauth2/authorize'

curl --data 'grant_type=authorization_code&code=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MzcwNTk1MTUsImV4cCI6MTUzNzA2MDExNX0.crPx-kzjOGh5SCjT2oazG1vgM96ijc4Wzc7pgV5Kogw&redirect_uri=web.chal.csaw.io:9000' 'http://web.chal.csaw.io:9000/oauth2/token'