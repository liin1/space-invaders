input.onButtonPressed(Button.A, function () {
    Ship.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Bullet = game.createSprite(Ship.get(LedSpriteProperty.X), Ship.get(LedSpriteProperty.Y))
    basic.pause(200)
    for (let index = 0; index < 4; index++) {
        Bullet.change(LedSpriteProperty.Y, -1)
        if (Invader.isTouching(Bullet)) {
            Invader.delete()
            Bullet.delete()
            basic.showIcon(IconNames.Ghost)
            basic.pause(1000)
        }
        basic.pause(200)
    }
    Bullet.delete()
})
input.onButtonPressed(Button.B, function () {
    Ship.change(LedSpriteProperty.X, 1)
})
let Invader: game.LedSprite = null
let Bullet: game.LedSprite = null
let Ship: game.LedSprite = null
Ship = game.createSprite(2, 4)
basic.forever(function () {
    Invader = game.createSprite(randint(0, 4), 0)
    Invader.turn(Direction.Right, 90)
    basic.pause(200)
    for (let index = 0; index < 4; index++) {
        Invader.move(1)
        basic.pause(500)
    }
    if (Invader.isTouching(Ship)) {
        basic.showIcon(IconNames.Skull)
    }
    Invader.delete()
})
