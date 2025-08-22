input.onButtonPressed(Button.A, function () {
    UserAnswer = Answer
})
input.onButtonPressed(Button.B, function () {
    UserAnswer = Random
})
let Variable2 = 0
let variable1 = 0
let Random = 0
let Answer = 0
let UserAnswer = 0
basic.showString("Your micro:bit will now quiz you.")
basic.forever(function () {
    Random = randint(0, 10)
    variable1 = randint(0, 10)
    Variable2 = randint(0, 10)
    basic.showString("What is " + variable1 + "x" + Variable2)
    Answer = variable1 * Variable2
    basic.showString("If you click button A, your answer will be" + Answer)
    basic.showString("If you click button B, your answer will be" + Random)
    if (UserAnswer == Answer) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
