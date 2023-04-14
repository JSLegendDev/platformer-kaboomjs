import kaboom from 'kaboom'


kaboom({
    width: 500,
    height: 500,
})

loadSpriteAtlas('./asset.png', {
    'player': {
        x: 0,
        y: 0,
        width: 32,
        height: 32
    }
})

add([
    sprite('player')
])