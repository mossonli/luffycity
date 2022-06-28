#! /Users/mosson/.pyenv/versions/fuguangenv/bin/python3

# 修改文件的可执行权限
# chmod +x filename

# 首行以后的代码必须要符合python的语法
"""
针对通用代码的运行，可以直接使用系统内置的全局环境的python解释器，也可以使用虚拟环境的解析器
#! /usr/bin/python3
如果这个代码需要调用对应的第三方模块，那么就要写上安装该模块的python解释器
#! /home/moluo/anaconda3/envs/luffycity/bin/python
"""
import os, sys
from faker import Faker

faker = Faker(["zh_CN"])
user = faker.unique.name()
print(f"hello，{user}")
