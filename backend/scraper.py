from datetime import datetime
from pprint import pprint

import requests
from bs4 import BeautifulSoup
from dateutil import tz


def get_heading_and_link(news):
    heading_tag = news.find(class_="loop-card__title")
    if heading_tag:
        data = (heading_tag.text).split(" ")
        cleaned_data = [item.strip() for item in data if item.strip()]
        heading = "".strip().join(f"{s} " for s in cleaned_data).strip()
        link_tag = heading_tag.find("a")
        if link_tag:
            link = link_tag.get("href")
            return heading, link
    return None, None


def get_category(news):
    category_tag = news.find(class_="loop-card__cat-group")
    if category_tag:
        return category_tag.get_text().replace("\n", "")

    return None


def get_key(news):
    meta_tag = news.find(class_="loop-card__meta")
    if meta_tag:
        time_tag = meta_tag.find("time")
        if time_tag:
            time = time_tag.get("datetime")
            return time
    return None


def get_time(news):
    meta_tag = news.find(class_="loop-card__meta")
    if meta_tag:
        time_tag = meta_tag.find("time")
        if time_tag:
            time = time_tag.get("datetime")

            datetime_obj = datetime.fromisoformat(time)

            local_timezone = tz.tzlocal()  # Get the local timezone
            local_time = datetime_obj.astimezone(local_timezone)

            date_str = local_time.strftime("%Y-%m-%d")
            time_str = local_time.strftime("%I:%M %p")

            return (date_str, time_str)
    return None


def get_img_link(news):
    figure_tag = news.find(class_="loop-card__figure")
    if figure_tag:
        img_tag = figure_tag.find("img")
        if img_tag:
            img_link = img_tag.get("src")
            return img_link
    return None


def scrape_news(url: str):

    id = 1

    newsDict = {}

    response = requests.get(url)

    soup = BeautifulSoup(response.content, "lxml")

    news_container = soup.find_all(class_="wp-block-query")

    ul_list = []
    for div in news_container:
        ul = div.find("ul", class_="wp-block-post-template")
        ul_list.append(ul)

    news_list = []
    for ul in ul_list:
        li_list = ul.find_all("li")
        for li in li_list:
            news_list.append(li)

    for news in news_list:
        heading, link = get_heading_and_link(news)
        category = get_category(news)
        date_str, time_str = get_time(news) or ("N/A", "N/A")
        img_link = get_img_link(news)

        if heading:
            newsDict[id] = {
                "heading": heading,
                "category": category,
                "time": time_str,
                "date": date_str,
                "link": link,
                "img_link": img_link,
            }
            id += 1

    newsDict = sorted(newsDict.items(), key=lambda item: item[0])
    return newsDict
