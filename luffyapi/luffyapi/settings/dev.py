"""
Django settings for luffyapi project.

Generated by 'django-admin startproject' using Django 4.0.3.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.0/ref/settings/
"""
import sys
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR / "apps"))
sys.path.insert(0, str(BASE_DIR / "utils"))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-*&0gid*en&=%!deopr4ey)1df1s6jv0u0+=)h34x$wn17qg91='

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["*"]

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    "rest_framework",
    "rest_framework_simplejwt",
    "corsheaders",  # cors跨域子应用 跨域配置1

    "home",
    "users",
    "courses",
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # cors跨域的中间件，必须放在CommonMiddleware前 跨域配置2
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
# 跨域配置3
CORS_ALLOW_ALL_ORIGINS = True

ROOT_URLCONF = 'luffyapi.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'luffyapi.wsgi.application'

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    # 'default': {
    #     'ENGINE': 'django.db.backends.sqlite3',
    #     'NAME': BASE_DIR / 'db.sqlite3',
    # }
    'default': {
        # 'ENGINE': 'django.db.backends.mysql',
        'ENGINE': 'dj_db_conn_pool.backends.mysql',
        'NAME': 'luffycity',
        'PORT': 3308,
        'HOST': '127.0.0.1',
        'USER': 'luffycity_user',
        'PASSWORD': 'luffycity',
        'OPTIONS': {
            'charset': 'utf8mb4',  # 连接选项配置,mysql8.0以上无需配置
        },
        'POOL_OPTIONS': {  # 连接池的配置信息
            'POOL_SIZE': 10,  # 连接池默认创建的链接对象的数量
            'MAX_OVERFLOW': 10  # 连接池默认创建的链接对象的最大数量
        }
    }
}
# redis configration
# 设置redis缓存
CACHES = {
    # 默认缓存
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        # 项目上线时,需要调整这里的路径
        # "LOCATION": "redis://:密码@IP地址:端口/库编号",
        "LOCATION": "redis://:123456@127.0.0.1:6379/0",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
            "CONNECTION_POOL_KWARGS": {"max_connections": 100},
        }
    },
    # 提供给admin运营站点的session存储
    "session": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://:123456@127.0.0.1:6379/1",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
            "CONNECTION_POOL_KWARGS": {"max_connections": 100},
        }
    },
    # 提供存储短信验证码
    "sms_code": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://:@127.0.0.1:6379/2",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
            "CONNECTION_POOL_KWARGS": {"max_connections": 100},
        }
    }
}

# 设置用户登录admin站点时,记录登录状态的session保存到redis缓存中
SESSION_ENGINE = "django.contrib.sessions.backends.cache"
# 设置session保存的位置对应的缓存配置项
SESSION_CACHE_ALIAS = "session"

# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

# 访问静态文件的url地址前缀
STATIC_URL = '/static/'
# 设置django的静态文件目录[手动创建]
STATICFILES_DIRS = [
    BASE_DIR / "static",
]

# 项目中存储上传文件的根目录[手动创建]，注意，uploads目录需要手动创建否则上传文件时报错
MEDIA_ROOT = BASE_DIR / "uploads"
# 访问上传文件的url地址前缀
MEDIA_URL = "/uploads/"

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# 配置日志
LOGGING = {
    'version': 1,  # 使用的日志模块的版本，目前官方提供的只有版本1，但是官方有可能会升级，为了避免升级出现的版本问题，所以这里固定为1
    'disable_existing_loggers': False,  # 是否禁用其他的已经存在的日志功能？肯定不能，有可能有些第三方模块在调用，所以禁用了以后，第三方模块无法捕获自身出现的异常了。
    'formatters': {  # 日志格式设置，verbose或者simple都是自定义的
        'verbose': {  # 详细格式，适合用于开发人员不在场的情况下的日志记录。
            # 格式定义：https://docs.python.org/3/library/logging.html#logrecord-attributes
            # levelname 日志等级
            # asctime   发生时间
            # module    文件名
            # process   进程ID
            # thread    线程ID
            # message   异常信息
            'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message}',
            'style': '{',  # 变量格式分隔符
        },
        'simple': {  # 简单格式，适合用于开发人员在场的情况下的终端输出
            'format': '{levelname} {message}',
            'style': '{',
        },
    },
    'filters': {  # 过滤器
        'require_debug_true': {
            '()': 'django.utils.log.RequireDebugTrue',
        },
    },
    'handlers': {  # 日志处理流程，console或者mail_admins都是自定义的。
        'console': {
            'level': 'DEBUG',  # 设置当前日志处理流程中的日志最低等级
            'filters': ['require_debug_true'],  # 当前日志处理流程的日志过滤
            'class': 'logging.StreamHandler',  # 当前日志处理流程的核心类，StreamHandler可以帮我们把日志信息输出到终端下
            'formatter': 'simple'  # 当前日志处理流程的日志格式
        },
        # 'mail_admins': {
        #     'level': 'ERROR',                  # 设置当前日志处理流程中的日志最低等级
        #     'class': 'django.utils.log.AdminEmailHandler',  # AdminEmailHandler可以帮我们把日志信息输出到管理员邮箱中。
        #     'filters': ['special']             # 当前日志处理流程的日志过滤
        # }
        'file': {
            'level': 'INFO',
            'class': 'logging.handlers.RotatingFileHandler',
            # 日志位置,日志文件名，日志保存目录logs必须手动创建
            'filename': BASE_DIR.parent / "logs/luffycity.log",
            # 单个日志文件的最大值，这里我们设置300M
            'maxBytes': 300 * 1024 * 1024,
            # 备份日志文件的数量，设置最大日志数量为10
            'backupCount': 10,
            # 日志格式:详细格式
            'formatter': 'verbose'
        },
    },
    'loggers': {  # 日志处理的命名空间
        'django': {
            'handlers': ['console', 'file'],  # 当基于django命名空间写入日志时，调用那几个日志处理流程
            'propagate': True,  # 是否在django命名空间对应的日志处理流程结束以后，冒泡通知其他的日志功能。True表示允许
        },
    }
}

# drf配置
REST_FRAMEWORK = {
    # 自定义异常处理
    'EXCEPTION_HANDLER': 'luffyapi.utils.exceptions.custom_exception_handler',
    # # 自定义认证   rest_framework_jwt 不在维护 换成 djangorestframework-simplejwt
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),

}

# 告诉的django 系统认证相关的功能，采用我们自定义的用户模型类
# 格式 AUTH_USER_MODEL= "子应用目录名.模型类"
AUTH_USER_MODEL = 'users.User'

import datetime

# jwt认证相关配置项
JWT_AUTH = {
    # 设置jwt的有效期
    # 如果内部站点，例如：运维开发系统，OA，往往配置的access_token有效期基本就是15分钟，30分钟，1~2个小时
    'JWT_EXPIRATION_DELTA': datetime.timedelta(weeks=1),  # 一周有效，
    # 自定义载荷
    'JWT_PAYLOAD_HANDLER': 'luffyapi.utils.authenticate.jwt_payload_handler',
}

# django自定义认证
AUTHENTICATION_BACKENDS = ['luffyapi.utils.authenticate.CustomAuthBackend', ]

# 腾讯云API接口配置
TENCENTCLOUD = {
    # 腾讯云访问秘钥ID
    "SecretId": "AKIDSggmeI7z2qSUHoaf18zb4JKdZv61PEZf",
    # 腾讯云访问秘钥key
    "SecretKey": "06xbzB7VabOyY3asztbkdIfqlovtLYXG",
    # 验证码API配置
    "Captcha": {
        "endpoint": "captcha.tencentcloudapi.com", # 验证码校验服务端域名
        "CaptchaType": 9,  # 验证码类型，固定为9
        "CaptchaAppId": 2059674751,  # 验证码应用ID
        "AppSecretKey": "04LwtDUlnQxumWnItAw4OPA**", # 验证码应用key
    },
}

# 容联云短信
RONGLIANYUN = {
    "accId": '8a216da8701eb7c101703d8f208c0c7b',
    "accToken": '59db381a86c94013b3992f35948c9df1',
    "appId": '8a216da8701eb7c101703d8f20ea0c81',
    "reg_tid": 1,      # 注册短信验证码的模板ID
    "sms_expire": 300, # 短信有效期，单位：秒(s)
    "sms_interval": 60,# 短信发送的冷却时间，单位：秒(s)
}


# Celery异步任务队列框架的配置项[注意：django的配置项必须大写，所以这里的所有配置项必须全部大写]
# 任务队列
CELERY_BROKER_URL = 'redis://:@127.0.0.1:6379/14'
# 结果队列
CELERY_RESULT_BACKEND = 'redis://:@127.0.0.1:6379/15'
# 时区，与django的时区同步
CELERY_TIMEZONE = TIME_ZONE
# 防止死锁
CELERY_FORCE_EXECV = True
# 设置并发的worker数量
CELERYD_CONCURRENCY = 200

# 设置失败允许重试[这个慎用，如果失败任务无法再次执行成功，会产生指数级别的失败记录]
CELERY_ACKS_LATE = True
# 每个worker工作进程最多执行500个任务被销毁，可以防止内存泄漏，500是举例，根据自己的服务器的性能可以调整数值
CELERYD_MAX_TASKS_PER_CHILD = 500
# 单个任务的最大运行时间，超时会被杀死[慎用，有大文件操作、长时间上传、下载任务时，需要关闭这个选项，或者设置更长时间]
CELERYD_TIME_LIMIT = 10 * 60
# 任务发出后，经过一段时间还未收到acknowledge, 就将任务重新交给其他worker执行
CELERY_DISABLE_RATE_LIMITS = True
# celery的任务结果内容格式
CELERY_ACCEPT_CONTENT = ['json', 'pickle']

# 之前定时任务（定时一次调用），使用了apply_async({}, countdown=30);
# 设置定时任务（定时多次调用）的调用列表，需要单独运行SCHEDULE命令才能让celery执行定时任务：celery -A mycelery.main beat，当然worker还是要启动的
# https://docs.celeryproject.org/en/stable/userguide/periodic-tasks.html
from celery.schedules import crontab
CELERY_BEAT_SCHEDULE = {
    "user-add": {  # 定时任务的注册标记符[必须唯一的]
        "task": "add",   # 定时任务的任务名称
        "schedule": 10,  # 定时任务的调用时间，10表示每隔10秒调用一次add任务
        # "schedule": crontab(hour=7, minute=30, day_of_week=1),,  # 定时任务的调用时间，每周一早上7点30分调用一次add任务
    }
}