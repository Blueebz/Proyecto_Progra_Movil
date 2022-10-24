"""empty message

Revision ID: f488d74beb06
Revises: 
Create Date: 2022-10-24 19:27:02.987225

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f488d74beb06'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Producto',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('codigo', sa.String(length=250), nullable=False),
    sa.Column('nombre', sa.String(length=250), nullable=False),
    sa.Column('valor_venta', sa.Integer(), nullable=False),
    sa.Column('Stock', sa.Integer(), nullable=False),
    sa.Column('descripcion', sa.String(length=500), nullable=False),
    sa.Column('imagen', sa.String(length=250), nullable=True),
    sa.Column('estado', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('Producto')
    # ### end Alembic commands ###