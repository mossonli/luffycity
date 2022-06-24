#! -*- coding:utf-8 -*-
# Admin 站点公共配置


from django.contrib import admin
admin.AdminSite.site_header = "嗨贼程序员"
admin.AdminSite.site_title = "海贼站点管理"

# 登录界面的logo
SIMPLEUI_LOGO = '/uploads/logo.png'
# 快速操作
SIMPLEUI_HOME_QUICK = True
# 服务器信息
SIMPLEUI_HOME_INFO = False

# 关闭simpleui内置的使用分析
SIMPLEUI_ANALYSIS = False
# 离线模式
SIMPLEUI_STATIC_OFFLINE = True
# 首页图标地址
SIMPLEUI_INDEX = 'http://www.luffycity.cn:3000/'
