from datetime import datetime
from flask import Flask
from flask import Flask, redirect, url_for, request
from flask_json import FlaskJSON, JsonError, json_response, as_json

app = Flask(__name__)
FlaskJSON(app)

@app.route('/get_time')
def get_time():
    return json_response(time=datetime.utcnow())


@app.route('/get_time_and_value')
@as_json
def get_time_and_value():
    return dict(time=datetime.utcnow(), value=12)


@app.route('/raise_error')
def raise_error():
    raise JsonError(description='Example text.', code=123)


@app.route('/success/<name>')
def success(name):
   return 'welcome %s' % name


@app.route('/search',methods = ['GET'])
def search():
  data = request.json
  ## pegando cada campo data["name"]
  return data

if __name__ == '__main__':
   app.run(debug = True)

if __name__ == '__main__':
    app.run()