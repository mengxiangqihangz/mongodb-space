
db.col.insert({
    title: 'MongoDB 教程', 
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '菜鸟教程',
    url: 'http://www.runoob.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})


db.books.insert({username:"smith"})
db.books.insert({username:"jones"})
db.books.find()
db.books.update({username:"smith",username:"jones"},{$set:{country:"canada"}})
db.books.update({username:"jones"}，{$unset:{country:1}})

db.books.find().pretty()
