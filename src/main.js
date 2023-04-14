import kaboom from 'kaboom'


kaboom({
    width: 500,
    height: 500,
})

loadSpriteAtlas('./asset.png', {
    'player': {
        x: 32,
        y: 128,
        width: 32,
        height: 32
    }
})

add([
    sprite('player')
])