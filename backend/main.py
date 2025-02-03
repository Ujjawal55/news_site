from typing import Optional

from fastapi import FastAPI

from scraper import scrape_news

app = FastAPI()


@app.get("/")
async def get_news():
    url = "https://techcrunch.com/latest/"
    news = scrape_news(url)
    return news
