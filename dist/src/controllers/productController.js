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
exports.deleteProduct = exports.modifyProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const product_1 = require("../models/product");
const category_1 = require("../models/category");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_1.Product.create(req.body);
        const productWithCategory = yield product_1.Product.findByPk(product.id, {
            include: [category_1.Category],
        });
        res.status(200).json({
            status: 'success',
            message: 'Product successfully created',
            payload: productWithCategory,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error creating product',
            payload: error,
        });
    }
});
exports.createProduct = createProduct;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.Product.findAll({
            include: [category_1.Category],
        });
        res.status(200).json({
            status: 'success',
            message: 'Products successfully retrieved',
            payload: products,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error retrieving products',
            payload: error,
        });
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const product = yield product_1.Product.findByPk(id, {
            include: [category_1.Category],
        });
        if (!product) {
            res.status(404).json({
                status: 'error',
                message: 'Product not found',
                payload: null,
            });
            return;
        }
        res.status(200).json({
            status: 'success',
            message: 'Product successfully retrieved',
            payload: product,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error retrieving product',
            payload: error,
        });
    }
});
exports.getProductById = getProductById;
const modifyProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const product = yield product_1.Product.findByPk(id);
        if (!product) {
            res.status(404).json({
                status: 'error',
                message: 'Product not found',
                payload: null,
            });
            return;
        }
        yield product.update(req.body);
        const updatedProduct = yield product_1.Product.findByPk(id, {
            include: [category_1.Category],
        });
        res.status(200).json({
            status: 'success',
            message: 'Product successfully updated',
            payload: updatedProduct,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error updating product',
            payload: error,
        });
    }
});
exports.modifyProduct = modifyProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const product = yield product_1.Product.findByPk(id);
        if (!product) {
            res.status(404).json({
                status: 'error',
                message: 'Product not found',
                payload: null,
            });
            return;
        }
        yield product.destroy();
        res.status(200).json({
            status: 'success',
            message: 'Product successfully deleted',
            payload: null,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error deleting product',
            payload: error,
        });
    }
});
exports.deleteProduct = deleteProduct;
