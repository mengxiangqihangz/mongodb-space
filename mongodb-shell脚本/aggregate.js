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

db.article.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])        //��һ�������Ƿ��飬�ڶ��������
// 1��ʾ �����
db.article.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : "$likes"}}}])        //��һ�������Ƿ��飬�ڶ��������
// ��Ӧ���У���ʾ���Ӧ�ĺ�
db.article.aggregate([{$group : {_id : "$by_user", num_tutorial : {$avg : "$likes"}}}])         //��ƽ��

db.article.aggregate([{$group : {_id : "$by_user", num_tutorial : {$min : "$likes"}}}])         //����Сֵ

db.article.aggregate([{$group : {_id : "$by_user", num_tutorial : {$max : "$likes"}}}])         //�����ֵ

db.mycol.aggregate([{$group : {_id : "$by_user", url : {$push: "$url"}}}])
