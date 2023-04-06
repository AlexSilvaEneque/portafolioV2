let tols = []

export default defineEventHandler(() => {
    tols = [
        {
            "name": "VSCode",
            "image": "/img/vsc.png"
        },
        {
            "name": "Git",
            "image": "/img/git.png"
        },
        {
            "name": "GitHub",
            "image": "/img/github.png"
        },
    ]

    return tols
})