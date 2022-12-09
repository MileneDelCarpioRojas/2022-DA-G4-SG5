# app.py

# Imports necesarios
import os
from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app

# Inicializamos Flask App
app = Flask(__name__)

# Inicializamos base de datos Firestore
cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()
cosas_ref = db.collection('cosas')

#Aqui agregamos nueva informacion a nuestra base de Firestore
@app.route('/add', methods=['POST'])
def create():
    try:
        id = request.json['id']
        cosas_ref.document(id).set(request.json)
        return jsonify({"operación exitosa": True}), 200
    except Exception as e:
        return f"Un error a ocurrido: {e}"


# leer() Lee y lista la información en nuestra coleccion en Firestore
# por_hacer : nos va entregando los documentos de acuerdo a su id 
# todas_las_cosas : muestra todos los documentos
@app.route('/listar', methods=['GET'])
def leer():
    try:
        # Check if ID was passed to URL query
        cosas_id = request.args.get('id')
        if cosas_id:
            por_hacer = cosas_ref.document(cosas_id).get()
            return jsonify(por_hacer.to_dict()), 200
        else:
            todas_las_cosas = [doc.to_dict() for doc in cosas_ref.stream()]
            return jsonify(todas_las_cosas), 200
    except Exception as e:
        return f"A ocurrido un error: {e}"


# Aqui borramos la información (documento) en la colección Firestore
@app.route('/borrar', methods=['GET', 'DELETE'])
def delete():
    try:
        # Check for ID in URL query
        cosas_id = request.args.get('id')
        cosas_ref.document(cosas_id).delete()
        return jsonify({"Exito": True}), 200
    except Exception as e:
        return f"A ocurrido un error: {e}"
