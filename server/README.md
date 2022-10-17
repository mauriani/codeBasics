### Install virtualven

```markdown
 pip install virtualenv

 ### Instanciando

 virtualenv venv

 ### Iniciando - windows

 venv\scripts\activate

### desativando 
deactivate
```

### Install Flask

```markdown
pip install Flask

pip install -U flask-cors

pip install -U Flask-SQLAlchemy
```

### **Gerando lista de dependências do projeto**

```markdown
pip freeze
pip freeze > requirements.txt
pip install -r requirements.txt
```

### **Conectando ao banco de dados**

Primeiro vamos criar um arquivo chamado [bd.py](http://bd.py) e escrever tais comandos

```sql

import sqlite3

conn = sqlite3.connect('cars.sqlite')

cursor = conn.cursor()

# criando a tabela (schema)

sql_query = """CREATE TABLE cars (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        marca TEXT NOT NULL,
        modelo TEXT NOT NULL,
        ano INTEGER
)"""

cursor.execute(sql_query)

print('Tabela criada com sucesso.')
```

Após isso vamos acessar o nosso terminal e digitar o comando

```sql
Python bd.py
```

Dessa forma ele vai gerar um arquivo na raiz do projeto

tutorial sqlite

https://www.tutorialspoint.com/python_data_access/python_sqlite_introduction.htm