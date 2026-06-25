"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const sequelize_typescript_1 = require("sequelize-typescript");
const product_1 = require("../models/product");
const connection = new sequelize_typescript_1.Sequelize({
    database: 'sisweb_db',
    dialect: 'postgres',
    username: 'sisweb_user',
    password: 'HDK#$%Ljkwerff.89',
    host: 'localhost',
    port: 5432,
    models: [product_1.Product],
});
function connectionDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection.authenticate();
            console.log('Conexión exitosa a PostgreSQL.');
            yield connection.sync();
            console.log('Modelos sincronizados con la base de datos.');
        }
        catch (e) {
            console.log('Error al conectar con la base de datos:', e);
        }
    });
}
exports.default = connectionDB;
