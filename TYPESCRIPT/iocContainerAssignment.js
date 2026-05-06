"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const typedi_1 = require("typedi");
// 2. RSS Source
let RSSFeedSource = class RSSFeedSource {
    fetchArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            return ["RSS: Article 1", "RSS: Article 2"];
        });
    }
};
RSSFeedSource = __decorate([
    (0, typedi_1.Service)()
], RSSFeedSource);
// 3. API Source
let APISource = class APISource {
    fetchArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            return ["API: Article A", "API: Article B"];
        });
    }
};
APISource = __decorate([
    (0, typedi_1.Service)()
], APISource);
// 4. Mock Source
let MockSource = class MockSource {
    fetchArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            return ["Mock: Test Article"];
        });
    }
};
MockSource = __decorate([
    (0, typedi_1.Service)()
], MockSource);
// 5. Aggregator (NO @Inject → simple constructor injection)
let NewsAggregator = class NewsAggregator {
    constructor(source) {
        this.source = source;
    }
    getLatestArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            const articles = yield this.source.fetchArticles();
            articles.forEach(article => console.log(article));
        });
    }
};
NewsAggregator = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [Object])
], NewsAggregator);
// ---- Usage ----
// RSS
const aggregator1 = new NewsAggregator(new RSSFeedSource());
aggregator1.getLatestArticles();
// API
const aggregator2 = new NewsAggregator(new APISource());
aggregator2.getLatestArticles();
// Mock
const aggregator3 = new NewsAggregator(new MockSource());
aggregator3.getLatestArticles();
