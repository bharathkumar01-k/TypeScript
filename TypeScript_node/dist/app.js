"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const todo_1 = __importDefault(require("./Router/todo"));
app.use("/", todo_1.default);
app.listen(3019, () => console.log("The app is listening on the port 3019"));
