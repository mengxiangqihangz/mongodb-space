db.col.insert({title: 'MongoDB �̳�', 
    description: 'MongoDB ��һ�� Nosql ���ݿ�',
    by: '����̳�',
    url: 'http://www.runoob.com',
    tags: ['mongodb'],
    likes: 100
})



db.col.insert({title: 'Java �̳�', 
    description: 'Java ����Sun Microsystems��˾��1995��5���Ƴ��ĸ߼�����������ԡ�',
    by: '����̳�',
    url: 'http://www.runoob.com',
    tags: ['java'],
    likes: 150
})


db.col.insert({
    title: 'PHP �̳�', 
    description: 'PHP ��һ�ִ�����̬������վ���ǿ�����ķ������˽ű����ԡ�',
    by: '����̳�',
    url: 'http://www.runoob.com',
    tags: ['php'],
    likes: 200
})

db.col.find({"title" : {$type : 2}})



