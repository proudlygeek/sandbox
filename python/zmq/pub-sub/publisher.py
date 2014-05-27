import zmq
import time
from random import choice

context = zmq.Context()
socket = context.socket(zmq.PUB)
socket.bind("tcp://127.0.0.1:5000")

countries = ['netherlands', 'brazil', 'germany', 'portugal']
events = ['yellow card', 'red card', 'goal', 'corner', 'foul']

while True:
    msg = "{} {}".format(choice(countries), choice(events))
    print("->{}".format(msg))
    socket.send(msg)
    time.sleep(1)