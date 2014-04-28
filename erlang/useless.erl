-module(useless).
-export([add/2]).
-export([hello/0]).
-export([greet_and_add_two/1]).

add(A,B) ->
    A + B.

%% Shows greetings.
hello() ->
    io:format("Hello, world!\n").

greet_and_add_two(X) ->
    hello(),
    add(X, 2).
