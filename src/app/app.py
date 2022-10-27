from flask import Flask, request, jsonify
from flask_migrate import Migrate
from model import db, Producto
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.url_map.strict_slashes = False
app.config['DEBUG'] = False
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

db.init_app(app)

Migrate(app, db)

@app.route('/productos', methods=['GET'])
def getProductos():
    productos = Producto.query.all()
    productos = list(map(lambda x: x.serialize(), productos))
    return jsonify(productos),200

@app.route('/productos/<id>', methods=['GET'])
def getProducto(id):
    producto = Producto.query.get(id)
    return jsonify(producto.serialize()), 200

@app.route('/productos/<id>', methods=['DELETE'])
def deleteProducto(id):
    producto = Producto.query.get(id)
    Producto.delete(producto)
    return jsonify(producto.serialize()), 200

@app.route('/productos/<id>', methods=['PUT'])
def updateProducto(id):
    producto = Producto.query.get(id)
   
    codigo = request.json.get('codigo')
    nombre = request.json.get('nombre')
    valor_venta = request.json.get('valor_venta')
    Stock = request.json.get('Stock')
    descripcion = request.json.get('descripcion')
    imagen = request.json.get('imagen')
    estado = request.json.get('estado')

    producto.codigo = codigo 
    producto.nombre = nombre
    producto.valor_venta = valor_venta
    producto.Stock = Stock 
    producto.descripcion = descripcion 
    producto.imagen = imagen
    producto.estado = estado 
    Producto.save(producto)

    return jsonify(producto.serialize()),200

@app.route('/productos', methods=['POST'])
def addProducto():
    producto = Producto()
    codigo = request.json.get('codigo')
    nombre = request.json.get('nombre')
    valor_venta = request.json.get('valor_venta')
    Stock = request.json.get('Stock')
    descripcion = request.json.get('descripcion')
    imagen = request.json.get('imagen')
    estado = request.json.get('estado')

    producto.codigo = codigo 
    producto.nombre = nombre
    producto.valor_venta = valor_venta
    producto.Stock = Stock 
    producto.descripcion = descripcion 
    producto.imagen = imagen
    producto.estado = estado 
    Producto.save(producto)

    return jsonify(producto.serialize()),200
