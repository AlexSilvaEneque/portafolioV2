let back = []

export default defineEventHandler(() => {
    back = [
        {
            "name": "NodeJS",
            "image": "/img/node.png"
        },
        {
            "name": "Express",
            "image": "/img/express.svg"
        },
        {
            "name": "PHP",
            "image": "/img/php.svg"
        },
        {
            "name": "Laravel",
            "image": "/img/laravel.svg"
        }
    ]

    return back
})