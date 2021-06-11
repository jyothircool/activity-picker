let random_picker = 0
input.onButtonPressed(Button.A, function () {
    random_picker = randint(1, 6)
    if (random_picker == 1) {
        basic.showString("read a book")
    } else if (random_picker == 2) {
        basic.showString("play computer games")
    } else if (random_picker == 3) {
        basic.showString("play games")
    } else if (random_picker == 4) {
        basic.showString("play soccer")
    } else if (random_picker == 5) {
        basic.showString("eat some snacks")
    } else {
        basic.showString("drink some water")
    }
})
basic.forever(function () {
	
})
