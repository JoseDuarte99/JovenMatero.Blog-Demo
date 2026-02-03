from django.contrib import admin
from .models import Post, Tag, Category, Comment, PostImage

class PostImageInline(admin.TabularInline):
    model = PostImage
    extra = 1
    fields = ('image',)

class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'published', 'active', 'id')
    inlines = [PostImageInline]

admin.site.register(Post, PostAdmin)
admin.site.register(Tag)
admin.site.register(Comment)
admin.site.register(Category)

