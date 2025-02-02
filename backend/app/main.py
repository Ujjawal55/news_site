from fastapi import FastAPI

from app.scraper import scrape_news

app = FastAPI()


@app.get("/{page}")
async def get_news(page: int):
    url = "https://techchruch.com/latest/"
    news = scrape_news(url)
    return news
