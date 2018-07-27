db.article.insert([
{
   _id: 100,
   title: 'MongoDB Overview',
   description: 'MongoDB is no sql database',
   by_user: 'Maxsu',
   url: 'http://www.yiibai.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100
},
{
   _id: 101,
   title: 'NoSQL Overview', 
   description: 'No sql database is very fast',
   by_user: 'Maxsu',
   url: 'http://www.yiibai.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 10
},
{
   _id: 102,
   title: 'Neo4j Overview', 
   description: 'Neo4j is no sql database',
   by_user: 'Kuber',
   url: 'http://www.neo4j.com',
   tags: ['neo4j', 'database', 'NoSQL'],
   likes: 750
},
{
   _id: 103,
   title: 'MySQL Overview', 
   description: 'MySQL is sql database',
   by_user: 'Curry',
   url: 'http://www.yiibai.com/mysql/',
   tags: ['MySQL', 'database', 'SQL'],
   likes: 350
}])

db.article.find()

db.article.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])        //第一个参数是分组，第二个是求和
// 1表示 求个数
db.article.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : "$likes"}}}])        //第一个参数是分组，第二个是求和
// 对应的列，表示求对应的和
db.article.aggregate([{$group : {_id : "$by_user", num_tutorial : {$avg : "$likes"}}}])         //求平均

db.article.aggregate([{$group : {_id : "$by_user", num_tutorial : {$min : "$likes"}}}])         //求最小值

db.article.aggregate([{$group : {_id : "$by_user", num_tutorial : {$max : "$likes"}}}])         //求最大值

db.mycol.aggregate([{$group : {_id : "$by_user", url : {$push: "$url"}}}])
