f5执行选中

// --------插入
for(var i = 0;i<10;i++){
//     db.users.insert({name:'zhangsan' + i })
    //  上面的播放按钮，支持选中执行?面
    db.users.insert({
        name:'zhangsan' + i,
        age: 15 + i,
        hobby:'骑车'
    })
}
db.users.insert({name: 'MongoDB 教程', 
    tags: ['mongodb', 'database', 'NoSQL']
})
db.users.insertMany([{name: "李四"}, {name: "王五"}])  //插入多条数据

// ----更新
db.users.update({age:22},{$set:{hobby:"骑马"}})
db.users.update({age:22},{$set:{hobby:"骑马"}},{multi:true})      //以上语句只会修改第一条发现的文档，如果你要修改多条相同的文档，则需要设置 multi 参数为 true。
db.users.find({age:22})
db.users.update({age:22},{hobby:"骑牛"})// 上面的是找到一条数据，然后更新这数据，这里是找到
//以下实例中我们替换了 _id 为 56064f89ade2f21f36b03136 的文档数据：
//id相同则替换，不同则插入
db.users.save({
    "_id" : ObjectId("56064f89ade2f21f36b03136"),
    "title" : "MongoDB",
    "description" : "MongoDB 是一个 Nosql 数据库",
    "by" : "Runoob",
    "url" : "http://www.runoob.com",
    "tags" : [
            "mongodb",
            "NoSQL"
    ],
    "likes" : 110
})


// ----- 删除数据
db.users.remove({name:"李四"})    //
db.users.remove({hobby:"骑车"},1)         //删除找到的第一条
db.users.find({hobby:"骑车"}).count()
db.users.remove()                       //全部删除


//语法中 Key 值为你要创建的索引字段，1为指定按升序创建索引，如果你想按降序来创建索引指定为-1即可。
db.users.ensureIndex({"name":1,"hobby":-1})
db.users.getIndexes()   //查询所有索引，上面的是一个索引



db.users.count()  //计数
// ----- --查询
db.users.find()
db.users.find().pretty()        //以格式化的方式来显示所有文档 ，在dos界面 使用方便
db.users.find({"name":'zhangsan0'})
db.users.find({"name":'zhangsan0'},{"name":'zhangsan3'}) //并列条件
// and 查询
db.users.find({$and:[{name:'zhangsan0'},{age:15}]})
db.users.find()
// or 查询
db.users.find({$or:[{name:'zhangsan0'},{age:15}]})

// 分页查询
db.users.find({}).limit(5)
db.users.find({}).limit(5).skip(2) //利用limit和skip实现分页。limit是 显示的数据条数
// 排序
db.users.find().sort({age:-1})  //      sort 排序，-1 倒序， 1为正序
db.users.find().sort({age:1,name:-1})  // 多列排序


db.users.find()
db.users.find({age:{$gt:18}})   //$gt 大于 
db.users.find({age:{$gte:18}})   //$gte 大于 等于
db.users.find({age:{$lt:18}})   //$gte 小于
db.users.find({age:{$lte:18}})   //$gte 小于 等于
db.users.find({age:{$gt:18 ,$lt :22}})      //大于18 和 小于22
db.users.find({age:{$ne:18}})           // 不等于