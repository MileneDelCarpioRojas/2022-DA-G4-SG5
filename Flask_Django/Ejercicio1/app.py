from app import app
from flask import render_template
@app.route('/')
def home():
    return 'Bienvenidos'

@app.route('/index')
def index():
 return render_template('index.html')

@app.route('/styles')
def styles():
    return render_template('styles.css')

@app.route('/script')
def script():
    return render_template('script.js')