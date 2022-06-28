#! -*- coding:utf-8 -*-

import datetime

print(datetime.datetime.now() + datetime.timedelta(seconds=10))
print(datetime.datetime.utcnow() + datetime.timedelta(seconds=10))

people = {'laowang': 20, 'tangyudi': 50, 'zhangsan': 45}
m = 'laowang'  # 1  这里假设m对应的年龄是最大的
for key in people.keys():  # 2  循环people里面的人名
    if people[m] < people[key]:  # 3  如果最大年龄的那个人的年龄  小于  当前循环到的people对应的那个人的年龄
        m = key  # 4  这一步就会把第一步假设的那个m就会重新赋值成 当前循环到的那个人名
print(m, people[m])

li = [1, 5, 99, 7, 56, 34, 23, 47]
max_num = 0
for i in li:
    if i > max_num:
        max_num = i
print(max_num)
for i in range(5):
    print(i)
