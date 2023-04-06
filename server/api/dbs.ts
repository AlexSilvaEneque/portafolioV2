let dbs = []

export default defineEventHandler(() => {
    dbs = [
        {
            "name": "MySQL",
            "image": "/img/mysql.png"
        },
        {
            "name": "Microsoft SQL Server",
            "image": "/img/sqlserver.png"
        },
        {
            "name": "MongoDB",
            "image": "/img/mongo.png"
        },
    ]
    return dbs
})