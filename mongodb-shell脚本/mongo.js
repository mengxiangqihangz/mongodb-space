f5ִ��ѡ��

// --------����
for(var i = 0;i<10;i++){
//     db.users.insert({name:'zhangsan' + i })
    //  ����Ĳ��Ű�ť��֧��ѡ��ִ��?��
    db.users.insert({
        name:'zhangsan' + i,
        age: 15 + i,
        hobby:'�ﳵ'
    })
}
db.users.insert({name: 'MongoDB �̳�', 
    tags: ['mongodb', 'database', 'NoSQL']
})
db.users.insertMany([{name: "����"}, {name: "����"}])  //�����������

// ----����
db.users.update({age:22},{$set:{hobby:"����"}})
db.users.update({age:22},{$set:{hobby:"����"}},{multi:true})      //�������ֻ���޸ĵ�һ�����ֵ��ĵ��������Ҫ�޸Ķ�����ͬ���ĵ�������Ҫ���� multi ����Ϊ true��
db.users.find({age:22})
db.users.update({age:22},{hobby:"��ţ"})// ��������ҵ�һ�����ݣ�Ȼ����������ݣ��������ҵ�
//����ʵ���������滻�� _id Ϊ 56064f89ade2f21f36b03136 ���ĵ����ݣ�
//id��ͬ���滻����ͬ�����
db.users.save({
    "_id" : ObjectId("56064f89ade2f21f36b03136"),
    "title" : "MongoDB",
    "description" : "MongoDB ��һ�� Nosql ���ݿ�",
    "by" : "Runoob",
    "url" : "http://www.runoob.com",
    "tags" : [
            "mongodb",
            "NoSQL"
    ],
    "likes" : 110
})


// ----- ɾ������
db.users.remove({name:"����"})    //
db.users.remove({hobby:"�ﳵ"},1)         //ɾ���ҵ��ĵ�һ��
db.users.find({hobby:"�ﳵ"}).count()
db.users.remove()                       //ȫ��ɾ��


//�﷨�� Key ֵΪ��Ҫ�����������ֶΣ�1Ϊָ�������򴴽�������������밴��������������ָ��Ϊ-1���ɡ�
db.users.ensureIndex({"name":1,"hobby":-1})
db.users.getIndexes()   //��ѯ�����������������һ������



db.users.count()  //����
// ----- --��ѯ
db.users.find()
db.users.find().pretty()        //�Ը�ʽ���ķ�ʽ����ʾ�����ĵ� ����dos���� ʹ�÷���
db.users.find({"name":'zhangsan0'})
db.users.find({"name":'zhangsan0'},{"name":'zhangsan3'}) //��������
// and ��ѯ
db.users.find({$and:[{name:'zhangsan0'},{age:15}]})
db.users.find()
// or ��ѯ
db.users.find({$or:[{name:'zhangsan0'},{age:15}]})

// ��ҳ��ѯ
db.users.find({}).limit(5)
db.users.find({}).limit(5).skip(2) //����limit��skipʵ�ַ�ҳ��limit�� ��ʾ����������
// ����
db.users.find().sort({age:-1})  //      sort ����-1 ���� 1Ϊ����
db.users.find().sort({age:1,name:-1})  // ��������


db.users.find()
db.users.find({age:{$gt:18}})   //$gt ���� 
db.users.find({age:{$gte:18}})   //$gte ���� ����
db.users.find({age:{$lt:18}})   //$gte С��
db.users.find({age:{$lte:18}})   //$gte С�� ����
db.users.find({age:{$gt:18 ,$lt :22}})      //����18 �� С��22
db.users.find({age:{$ne:18}})           // ������