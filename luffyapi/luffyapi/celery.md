## celery启动
启动多worker进程模式，以守护进程的方式运行，不需要在意终端。但是这种运行模型，一旦停止，需要手动启动。
```
(fuguangenv)  ~/Documents/luffycity/luffyapi   feature/user ±  celery multi start worker -A luffyapi -E --pidfile="/Users/mosson/Documents/luffycity/luffyapi/logs/worker1.pid" --logfile="/Users/mosson/Documents/luffycity/luffyapi/logs/celery.log" -l info -n worker1
celery multi v5.2.7 (dawn-chorus)
> Starting nodes...
        > worker@worker1: OK
(fuguangenv)  ~/Documents/luffycity/luffyapi   feature/user ±  
```
## django终端下调用celery的
```shell
(fuguangenv)  ~/Documents/luffycity/luffyapi   feature/user ±   python manage.py shell
Python 3.9.1 (default, Jan 14 2021, 09:34:23) 
[Clang 11.0.3 (clang-1103.0.32.62)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
(InteractiveConsole)
>>> from users.tasks import send_sms1
>>>  res = send_sms1.delay()
  File "<console>", line 1
    res = send_sms1.delay()
IndentationError: unexpected indent
>>> res = send_sms1.delay()
>>> res.id
'57d4adc4-1a02-456a-a7a0-ac3b2023770c'
>>> 

```