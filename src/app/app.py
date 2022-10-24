from flask import Flask, request, jsonify
from flask_migrate import Migrate
from models import db, Cliente, Producto, Venta
from flask_cors import CORS, cross_origin