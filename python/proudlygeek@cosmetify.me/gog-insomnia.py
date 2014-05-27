# coding: utf-8

import os
import re
import time
import requests

GOG_URL="http://www.gog.com/springinsomnia/ajax/getCurrentOffer"
DELAY_SECONDS=5
THRESHOLD=50

"""curl -X POST -d"message=Ciao" -d "api_key=d1a25cbe865ff1c4c9c9f87cca26375d08f49055ee3c52b4f8e4b095b172" -d "api_secret=b16fa7699faca54d3de76da125916e1021abbf644b1f4506ec28cead473335cd" https://api.push.co/1.0/push
{"message":"Push Notification has successfully been sent to the queue.","success":true}%"""

def send_push_notify(msg):
    if len(msg):
        requests.post("https://api.push.co/1.0/push", {
            "api_key": "d1a25cbe865ff1c4c9c9f87cca26375d08f49055ee3c52b4f8e4b095b172",
            "api_secret": "b16fa7699faca54d3de76da125916e1021abbf644b1f4506ec28cead473335cd",
            "message": msg
        })

def scrape_gog():
    """
    Scrapes GOG.com for the current Spring Insomnia Sale every DELAY_SECONDS
    (5 by default); when the current title's count reaches the thresold value
    (50 by default) the script notifies the user by using Mac OS X Notifier.
    """
    reset = False

    while True:
        try:
            page = requests.get(GOG_URL).json()
        except Exception:
            pass

        title = re.findall('"game__title"> (.+) <b', page['html'])[0]
        left = int(page['amountLeft'])

        if not reset and int(left) <= THRESHOLD:
            cmd = "osascript -e \'display notification \"Alert: {} is almost sold out!\" with title \"GOG.COM: {}\"\'".format(title, title)
            print cmd
            os.system(cmd)
            print "[ALERT]: {} is almost sold out!".format(title)
            send_push_notify(msg="[ALERT]: {} is almost sold out!".format(title))
            reset = True

        if left > THRESHOLD:
            reset = False

        time.sleep(DELAY_SECONDS)

if __name__ == '__main__':
    scrape_gog()
