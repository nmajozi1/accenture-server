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
exports.getSliderController = void 0;
const card_slider_service_1 = require("../services/card-slider.service");
const getSliderController = ({}, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sliders = yield (0, card_slider_service_1.getListSlides)();
        console.log(sliders);
        res.status(200).send(sliders.data);
    }
    catch (e) {
        res.status(500).send(`${e}`);
    }
});
exports.getSliderController = getSliderController;
