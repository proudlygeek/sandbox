-- Simple stuff
(50 * 100) - 99

-- Booleans
True && False
not False
not (True && False)

-- Equality
5 == 5
5 /= 4
"hello" == "hello"

-- Functions
succ 8
min 9 10
max 3.2 3.3

doubleMe x = x + x
doubleMe 3

doubleUs x y = doubleMe x + doubleMe y

doubleSmallNumber x = if x > 100
    then x
    else x * 2

doubleSmallNumber' x = (if x > 100 then x else x*2) + 1

-- Lists
[1,2,3,4] ++ [9,10,11,12]
"hello" ++ " " ++ "world"
['w','o'] ++ ['o','t']
'A': " SMALL CAT"
5:[1,2,3,4,5]

"Steve Buscemi" !! 6
[9.4,33.2,96.2,11.2,23.25] !! 1
b = [[1,2,3,4],[5,3,3,3],[1,2,2,3,4],[1,2,3]]
[3,2,1] > [2,1,0]
head [5,4,3,2,1]
tail [5,4,3,2,1]
last [5,4,3,2,1]
init [5,4,3,2,1]
length [5,4,3,2,1]
null [1,2,3]
reverse [5,4,3,2,1]
take 3 [1,2,3,4,5]
drop 3 [1,2,3,4,5]
minimum [54,12,33,54]
maximum [12, 121, 340, 1]
sum [1,2,3,4,5]
product [1,2,3,4,5,0]
2 `elem` [1,2,3]

-- Ranges
[1..20]
['a'..'z']
['K'..'Z']
[2,4..20]
[3,6..20]
take 10 (cycle [1,2,3])
take 4 (repeat 10)

-- List Comprehensions