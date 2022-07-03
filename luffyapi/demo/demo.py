#! -*- coding:utf-8 -*-

import datetime

print(datetime.datetime.now() + datetime.timedelta(seconds=10))
print(datetime.datetime.utcnow() + datetime.timedelta(seconds=10))

age = 18
while True:
    guess = input(">>>:")
    if guess.isdigit():
        guess = int(guess)
        if guess > age:
            print("大了")
        elif guess < age:
            print("小了")
        else:
            print("正好")
            break
    else:
        print("请输入数字")

