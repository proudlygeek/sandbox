import zmq
import time

context = zmq.Context()
socket = context.socket(zmq.REP)
socket.bind("tcp://*:6666")

while True:
    msg = socket.recv()
    print("Reveived Hello")
    time.sleep(1)
    socket.send("World")