#! -*- coding:utf-8 -*-

import json

# list_a = [{"a": 1}, {"b": 2}, {"c": 3}]
# dict_a = {"list_a": list_a}
# json_dic = json.dumps(dict_a)
# print(json_dic)
# print(type(json_dic))
s = '{"list_a": [{"a": 1}, {"b": 2}, {"c": 3}]}'
print(json.loads(s))



