import k from './k'

k.loadSpriteAtlas('./asset.png', {
    'yellow-platform': {
        x: 0,
        y: 64,
        width: 32,
        height: 32
    },
    'green-platform' : {
        x: 32,
        y: 64,
        width: 32,
        height: 32
    }, 
    'red-platform': {
        x: 0,
        y: 96,
        width: 32,
        height: 32
    },
    'blue-platform' : {
        x: 32,
        y: 96,
        width: 32,
        height: 32
    }, 
})

k.add([
    k.sprite('green-platform')
])