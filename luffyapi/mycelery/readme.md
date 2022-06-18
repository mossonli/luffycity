## 执行celery
```bash
cd ~/Desktop/luffycity/luffycityapi

# 普通的运行方式[默认多进程，卡终端，按CPU核数+1创建进程数]
# ps aux|grep celery
celery -A mycelery.main worker --loglevel=info

# 启动多工作进程，以守护进程的模式运行[一个工作进程就是4个子进程]
# 注意：pidfile和logfile必须以绝对路径来声明
celery multi start worker -A mycelery.main -E --pidfile="/home/moluo/Desktop/luffycity/luffycityapi/logs/worker1.pid" --logfile="/home/moluo/Desktop/luffycity/luffycityapi/logs/celery.log" -l info -n worker1
celery multi start worker -A mycelery.main -E --pidfile="/home/moluo/Desktop/luffycity/luffycityapi/logs/worker2.pid" --logfile="/home/moluo/Desktop/luffycity/luffycityapi/logs/celery.log" -l info -n worker2

# 关闭运行的工作进程
celery multi stop worker -A mycelery.main --pidfile="/home/moluo/Desktop/luffycity/luffycityapi/logs/worker1.pid" --logfile="/home/moluo/Desktop/luffycity/luffycityapi/logs/celery.log"
celery multi stop worker -A mycelery.main --pidfile="/home/moluo/Desktop/luffycity/luffycityapi/logs/worker2.pid" --logfile="/home/moluo/Desktop/luffycity/luffycityapi/logs/celery.log"
```