import requests

def count_words_in_page(url):
    resp = requests.get(url)
    return len(resp.text.split())