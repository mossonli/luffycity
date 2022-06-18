#! -*- coding:utf-8 -*-
import os, django
from celery import Celery

# 必须在celery应用对象之前执行
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'luffyapi.settings.dev')

# 实例化celery对象
app = Celery("luffyapi")

# 指定任务的队列名称
app.conf.task_default_queue = "Celery"
# 也可以把配置写在django的项目配置中
app.config_from_object('django.conf:settings', namespace="CELERY") #设置django中配置以CELERY_开头

# 自动根据配置查找django中的子应用下的tasks任务文件
app.autodiscover_tasks()




