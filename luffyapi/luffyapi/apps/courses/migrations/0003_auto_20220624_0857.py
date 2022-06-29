# Generated by Django 3.2 on 2022-06-24 00:57

import ckeditor_uploader.fields
from django.db import migrations, models
import stdimage.models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0002_auto_20220622_1434'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='course_cover',
            field=stdimage.models.StdImageField(blank=True, force_min_size=False, max_length=255, null=True, upload_to='course/cover', variations={'thumb_1080x608': (1080, 608), 'thumb_108x61': (108, 61, True), 'thumb_540x304': (540, 304)}, verbose_name='封面图片'),
        ),
        migrations.AlterField(
            model_name='coursecategory',
            name='remark',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, default='', null=True, verbose_name='分类描述'),
        ),
        migrations.AlterField(
            model_name='coursedirection',
            name='remark',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, default='', null=True, verbose_name='方向描述'),
        ),
        migrations.AlterField(
            model_name='courselesson',
            name='orders',
            field=models.SmallIntegerField(default=1, verbose_name='第几节'),
        ),
        migrations.AlterField(
            model_name='teacher',
            name='avatar',
            field=stdimage.models.StdImageField(force_min_size=False, null=True, upload_to='teacher', variations={'thumb_400x400': (400, 400), 'thumb_50x50': (50, 50, True), 'thumb_800x800': (800, 800)}, verbose_name='讲师头像'),
        ),
        migrations.AlterModelTable(
            name='course',
            table='lf_course_info',
        ),
        migrations.AlterModelTable(
            name='coursecategory',
            table='lf_course_category',
        ),
        migrations.AlterModelTable(
            name='coursechapter',
            table='lf_course_chapter',
        ),
        migrations.AlterModelTable(
            name='coursedirection',
            table='lf_course_direction',
        ),
        migrations.AlterModelTable(
            name='courselesson',
            table='lf_course_lesson',
        ),
        migrations.AlterModelTable(
            name='teacher',
            table='lf_teacher',
        ),
    ]