import sqlite3

conn = sqlite3.connect('code.sqlite')

cursor = conn.cursor()

# criando a tabela (schema)
sql_query_users = """CREATE TABLE users (
        user_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone TEXT NOT NULL,
        ranking INTEGER
)"""


sql_query_group = """CREATE TABLE groups (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL UNIQUE,
        description TEXT NOT NULL,
        linkDiscord TEXT NOT NULL
)"""


cursor.execute(sql_query_users)
cursor.execute(sql_query_group)


print('Tabela criada com sucesso.')



# Groups = [
#   {
#     "Title": "Desenvolvimento web",
#     "Description": "Nesse grupo iremos abordar temas como html, css e javascript",
#     "linkDiscord": '',
#     "Participants": [{
#       "name": "Mauriani",
#       "ranking": 5.4
#     }]
#   },
#   {
#     "Title": "SQL",
#     "Description": "Nesse grupo iremos abordar temas como html, css e javascript",
#     "linkDiscord": '',
#     "Participants": [{
#       "name": "Mauriani",
#       "ranking": 5.4
#     }]
#   },
#   {
#     "Title": "React",
#     "Description": "Nesse grupo iremos abordar temas como html, css e javascript",
#     "linkDiscord": '',
#     "Participants": [{
#       "name": "Mauriani",
#       "ranking": 5.4
#     }]
#   },
# ]