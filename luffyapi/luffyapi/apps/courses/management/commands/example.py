#! -*- coding:utf-8 -*-
# =========================== 添加测试数据 方式 1
"""
文档：https://docs.djangoproject.com/zh-hans/3.2/howto/custom-management-commands/
1 在子应用目录下添加一个 `management/commands`  包目录，然后这个commands里面处理`__init__.py`以外，
其他文件的文件名将作为django-admin或者python manage.py的命令选项了。注意：文件名不能以_开头，否则不会被识别为命令。

2 接着我们可以在commands包下根据自己的业务需要，编写对应的命令。
例如，我们现在需要在courses子应用下添加课程对应的测试数据，所以我们在courses下创建 `management/commands`  包目录，然后创建命令文件example.py，代码：
3 命令行执行 Python manage.py example.py
"""

# from django.core.management.base import BaseCommand, CommandError
# from courses.models import Teacher


# # 类名必须是Command而且一个文件就是一个命令类，这个命令类必须直接或间接继承BaseCommand
# class Command(BaseCommand):
#     help = '添加课程相关的测试数据'
#
#     # 如果当前命令，需要接受来自终端的参数，可以使用add_arguments
#     def add_arguments(self, parser):
#         pass
#         # 位置参数，必填项
#         # parser.add_argument('name', nargs='+', type=int)
#
#         # 命令参数，可选项
#         # parser.add_argument(
#         #     '--table',
#         #     action='store_true',
#         #     help='Delete poll instead of closing it',
#         # )
#
#     # 命令执行的核心方法，
#     def handle(self, *args, **options):
#         """添加测试数据"""
#         print("添加测试数据")
#
#         Teacher.objects.create(
#             name="赵小明",
#             avatar="teacher/avatar.jpg",
#             role=1,
#             title="老师",
#             signature="从业3年，管理班级无数",
#             brief="从业3年，管理班级无数",
#         )
"""
(fuguangenv)  ~/Documents/luffycity/luffyapi   feature/course ±  python manage.py example             
添加测试数据
"""

# =========================== 添加测试数据 方式 2
# pip install faker
import constants, random
from django.core.management.base import BaseCommand, CommandError
from courses.models import Teacher
from faker import Faker
from django.conf import settings


# 类名必须是Command而且一个文件就是一个命令类，这个命令类必须直接或间接继承BaseCommand
class Command(BaseCommand):
    help = '添加课程相关的测试数据'

    # 如果当前命令，需要接受来自终端的参数，可以使用add_arguments
    def add_arguments(self, parser):
        # 位置参数，必填项
        # parser.add_argument('date_type', nargs='+', type=int, help="添加数据的类型")

        # 命令参数，可选项
        parser.add_argument(
            '--type',
            dest='type',
            default='teacher',
            type=str,
            help='测试数据的类型',
        )

        parser.add_argument(
            '--number',
            dest='number',
            default=10,
            type=int,
            help='添加数据的数量',
        )

    # 命令执行的核心方法，
    def handle(self, *args, **options):
        """添加课程相关的测试数据"""
        if options["type"] == "teacher":
            self.add_teacher(options)
        elif options["type"] == "direction":
            self.add_direction(options)

    def add_teacher(self, options):
        """添加授课老师的测试数据"""
        faker = Faker(["zh_CN"])
        for i in range(options["number"]):
            Teacher.objects.create(
                name=faker.unique.name(),  # 唯一的姓名
                avatar="teacher/avatar.jpg",
                role=random.randint(0, 2),
                title="老师",
                signature="从业3年，管理班级无数",
                brief=f"从业3年，管理班级无数，联系电话：{faker.unique.phone_number()}，邮箱地址：{faker.unique.company_email()}",
            )
        print("添加授课老师的测试数据完成....")

    def add_direction(self, options):
        """添加学习方向的测试数据"""
        print("添加学习方向的测试数据完成....")
"""
cd ~/Desktop/luffycity/luffycityapi
python manage.py example
python manage.py example --type=teacher
python manage.py example --type=direction
python manage.py example --type=teacher  --number=100
"""