import zmq
context = zmq.Context()

socket = context.socket(zmq.REQ)
socket.connect("tcp://127.0.0.1:5000")

for i in range(10):
    msg = "msg {}".format(i)
    socket.send(msg)
    print("sending {}".format(msg))
    msg_in = socket.recv()
    print("msg received was {}".format(msg_in))