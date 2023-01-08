from PIL import Image
import os
# 获取当前py文件的根目录
basePath = os.path.dirname(os.path.abspath(__file__))
# 获取图片源目录
old_Path = os.path.join(basePath, 'source_pics')
# 获取图片改后保存目录
new_path = os.path.join(basePath, 'resized_pics')
# os.walk遍历这个路径下的图片文件
raw_files = os.walk(old_Path)
for root, dirs, files in raw_files:   # 把遍历的根目录、子目录以及文件名展现出来
    for file in files:                # 把单个文件名提取出来，方便一个个处理
        # 合并路径得到源图片的绝对路径
        old_pic_path = os.path.join(root, file)
        # 打开当前目录下图片文件对象
        old_pic = Image.open(old_pic_path)
        # 修改图片size为32*32，生成新图片对象
        new_pic = old_pic.resize((40, 40), Image.ANTIALIAS)
        # 合并路径得到新图片的绝对路径
        new_pic_path = os.path.join(new_path, file)
        #保存新图片文件到新目录
        new_pic.save(new_pic_path)