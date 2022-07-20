#! -*- coding:utf-8 -*-
"""常量配置文件"""
# 导航的位置 --> 顶部
NAV_HEADER_POSITION = 0
# 导航的位置 --> 脚部
NAV_FOOTER_POSITION = 1
# 顶部导航显示的最大数量
NAV_HEADER_SIZE = 5
# 脚部导航显示的最大数量
NAV_FOOTER_SIZE = 10

# 轮播广告显示的最大数量
BANNER_SIZE = 10

# 列表页数据的缓存周期，单位：秒
LIST_PAGE_CACHE_TIME = 24 * 60 * 60 # 1天

# 默认头像
DEFAULT_USER_AVATAR = "avatar/2022/avatar.jpg"
# 手动在uploads下创建avatar/2021/并把客户端的头像保存到该目录下。

# 设置热门搜索关键字在redis中的key前缀名称
DEFAULT_HOT_WORD = "hot_word"
# 设置返回的热门搜索关键字的数量
HOT_WORD_LENGTH = 5
# 设置热门搜索关键字的有效期时间[单位：天]
HOT_WORD_EXPIRE = 7
