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
exports.getCategoryById = exports.getAllCategories = exports.createCategory = void 0;
const category_1 = require("../models/category");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield category_1.Category.create(req.body);
        res.status(200).json({
            status: 'success',
            message: 'Category successfully created',
            payload: category,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error creating category',
            payload: error,
        });
    }
});
exports.createCategory = createCategory;
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_1.Category.findAll();
        res.status(200).json({
            status: 'success',
            message: 'Categories successfully retrieved',
            payload: categories,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error retrieving categories',
            payload: error,
        });
    }
});
exports.getAllCategories = getAllCategories;
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const category = yield category_1.Category.findByPk(id);
        if (!category) {
            res.status(404).json({
                status: 'error',
                message: 'Category not found',
                payload: null,
            });
            return;
        }
        res.status(200).json({
            status: 'success',
            message: 'Category successfully retrieved',
            payload: category,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Error retrieving category',
            payload: error,
        });
    }
});
exports.getCategoryById = getCategoryById;
