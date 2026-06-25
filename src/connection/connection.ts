import 'reflect-metadata';
import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/product';
import { Category } from '../models/category';

const connection = new Sequelize({
  database: 'sisweb_db',
  dialect: 'postgres',
  username: 'sisweb_user',
  password: 'HDK#$%Ljkwerff.89',
  host: 'localhost',
  port: 5432,
  models: [Category, Product],
});

async function connectionDB() {
  try {
    await connection.authenticate();
    console.log('Conexión exitosa a PostgreSQL.');

    await connection.sync({ alter: true });
    console.log('Modelos sincronizados con la base de datos.');
  } catch (e) {
    console.log('Error al conectar con la base de datos:', e);
  }
}

export default connectionDB;