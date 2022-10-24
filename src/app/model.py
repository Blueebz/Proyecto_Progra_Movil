from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Producto(db.Model):
    __tablename__= 'Producto'
    id = db.Column(db.Integer, primary_key = True)
    codigo = db.Column(db.String(250), nullable = False)
    nombre = db.Column(db.String(250), nullable = False)
    valor_venta = db.Column(db.Integer, nullable = False)
    Stock = db.Column(db.Integer, nullable = False)
    descripcion = db.Column(db.String(500), nullable = False)
    imagen = db.Column(db.String(250), nullable = True)
    estado = db.Column(db.Integer, nullable = True )

    def serialize(self):
        return {
            "id": self.id,
            "codigo": self.codigo, 
            "nombre": self.nombre,
            "valor_venta": self.valor_venta,
            "Stock": self.Stock, 
            "descripcion": self.descripcion,
            "imagen": self.imagen,
            "estado": self.estado
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()