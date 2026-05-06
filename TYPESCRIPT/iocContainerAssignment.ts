// Import (required for TypeDI but not using Inject now)
export{};
import "reflect-metadata";
import { Service } from "typedi";

// 1. Interface
interface NewsSource {
  fetchArticles(): Promise<string[]>;
}

// 2. RSS Source
@Service()
class RSSFeedSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["RSS: Article 1", "RSS: Article 2"];
  }
}

// 3. API Source
@Service()
class APISource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["API: Article A", "API: Article B"];
  }
}

// 4. Mock Source
@Service()
class MockSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["Mock: Test Article"];
  }
}

// 5. Aggregator (NO @Inject → simple constructor injection)
@Service()
class NewsAggregator {
  private source: NewsSource;

  constructor(source: NewsSource) {
    this.source = source;
  }

  async getLatestArticles(): Promise<void> {
    const articles = await this.source.fetchArticles();
    articles.forEach(article => console.log(article));
  }
}

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