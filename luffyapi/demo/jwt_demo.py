#! -*- coding:utf-8 -*-
import base64, json, hashlib,datetime

if __name__ == '__main__':
    """jwt 头部的生成"""
    header_data = {"typ": "jwt", "alg": "HS256"}
    header = base64.b64encode(json.dumps(header_data).encode()).decode()
    print(header)  # eyJ0eXAiOiAiand0IiwgImFsZyI6ICJIUzI1NiJ9

    """jwt 载荷的生成"""
    payload_data = {
        "sub": "root",
        "exp": "150123455",
        "iat": "150103455",
        "name": "wangxiaoming",
        "admin": True,
        "acc_pwd": "QiLCJhbGciOiJIUzI1NiJ9QiLCJhbGciOiJIUzI1NiJ9QiLCJhbGciOiJIUzI1NiJ9",
    }
    # 将其进行base64编码，得到JWT的第二部分。
    payload = base64.b64encode(json.dumps(payload_data).encode()).decode()
    print(
        payload)  # eyJzdWIiOiAicm9vdCIsICJleHAiOiAiMTUwMTIzNDU1IiwgImlhdCI6ICIxNTAxMDM0NTUiLCAibmFtZSI6ICJ3YW5neGlhb21pbmciLCAiYWRtaW4iOiB0cnVlLCAiYWNjX3B3ZCI6ICJRaUxDSmhiR2NpT2lKSVV6STFOaUo5UWlMQ0poYkdjaU9pSklVekkxTmlKOVFpTENKaGJHY2lPaUpJVXpJMU5pSjkifQ==

    # from django.conf import settings
    # secret = settings.SECRET_KEY
    secret = 'django-insecure-hbcv-y9ux0&8qhtkgmh1skvw#v7ru%t(z-#chw#9g5x1r3z=$p'
    data = header + payload + secret  # 秘钥绝对不能提供给客户端。
    HS256 = hashlib.sha256()
    HS256.update(data.encode('utf-8'))
    signature = HS256.hexdigest()
    print(signature)  # 815ce0e4e15fff813c5c9b66cfc3791c35745349f68530bc862f7f63c9553f4b

    # jwt 最终的生成
    token = f"{header}.{payload}.{signature}"
    print(token)
    # eyJ0eXAiOiAiand0IiwgImFsZyI6ICJIUzI1NiJ9.eyJzdWIiOiAicm9vdCIsICJleHAiOiAiMTUwMTIzNDU1IiwgImlhdCI6ICIxNTAxMDM0NTUiLCAibmFtZSI6ICJ3YW5neGlhb21pbmciLCAiYWRtaW4iOiB0cnVlLCAiYWNjX3B3ZCI6ICJRaUxDSmhiR2NpT2lKSVV6STFOaUo5UWlMQ0poYkdjaU9pSklVekkxTmlKOVFpTENKaGJHY2lPaUpJVXpJMU5pSjkifQ==.815ce0e4e15fff813c5c9b66cfc3791c35745349f68530bc862f7f63c9553f4b

    """ 服务端认证token的过程 """
    token = "eyJ0eXAiOiAiand0IiwgImFsZyI6ICJIUzI1NiJ9.eyJzdWIiOiAicm9vdCIsICJleHAiOiAxNjM2NTk3OTAzLCAiaWF0IjogMTYzNjU5NDMwMywgIm5hbWUiOiAid2FuZ3hpYW9taW5nIiwgImFkbWluIjogdHJ1ZSwgImFjY19wd2QiOiAiUWlMQ0poYkdjaU9pSklVekkxTmlKOVFpTENKaGJHY2lPaUpJVXpJMU5pSjlRaUxDSmhiR2NpT2lKSVV6STFOaUo5In0=.ce46f9d350be6b72287beb4f5f9b1bc4c42fc1a1f8c8db006e9e99fd46961156"
    # token = "eyJ0eXAiOiAiand0IiwgImFsZyI6ICJIUzI1NiJ9.eyJzdWIiOiJyb290IiwiZXhwIjoxNjMxNTI5MDg4LCJpYXQiOjE2MzE1MjU0ODgsIm5hbWUiOiJ3YW5neGlhb2hvbmciLCJhZG1pbiI6dHJ1ZSwiYWNjX3B3ZCI6IlFpTENKaGJHY2lPaUpJVXpJMU5pSjlRaUxDSmhiR2NpT2lKSVV6STFOaUo5UWlMQ0poYkdjaU9pSklVekkxTmlKOSJ9.b533c5515444c51058557017e433d411379862d91640c8beed6f2617b1da2feb"
    header, payload, signature = token.split(".")

    # 验证是否过期了
    # 先基于base64，接着使用json解码
    payload_data = json.loads(base64.b64decode(payload.encode()))
    print(payload_data)
    exp = payload_data.get("exp", None)
    if exp is not None and int(exp) < int(datetime.now().timestamp()):
        print("token过期！！！")
    else:
        print("没有过期")

    # 验证token是否有效，是否被篡改
    # from django.conf import settings
    # secret = settings.SECRET_KEY
    secret = 'django-insecure-hbcv-y9ux0&8qhtkgmh1skvw#v7ru%t(z-#chw#9g5x1r3z=$p'
    data = header + payload + secret  # 秘钥绝对不能提供给客户端。
    HS256 = hashlib.sha256()
    HS256.update(data.encode('utf-8'))
    new_signature = HS256.hexdigest()

    if new_signature != signature:
        print("认证失败")
    else:
        print("认证通过")


