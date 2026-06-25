"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRoutes_1 = __importDefault(require("./productRoutes"));
const categoryRoutes_1 = __importDefault(require("./categoryRoutes"));
const apiRouter = (0, express_1.Router)();
apiRouter.use('/product', productRoutes_1.default);
apiRouter.use('/category', categoryRoutes_1.default);
apiRouter.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = apiRouter;
