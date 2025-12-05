from rest_framework import serializers
from .models import Category, Tag, Post, Comment


# Category Serializer --------------------------------------

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


# Tag Serializer --------------------------------------

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']


# Post Serializer  --------------------------------------

class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True
    )
    tags = TagSerializer(many=True, read_only=True)
    tag_ids = serializers.PrimaryKeyRelatedField(
        queryset=Tag.objects.all(), many=True, source='tags', write_only=True
    )
    author = serializers.StringRelatedField(read_only=True)  # muestra el nombre del autor
    comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Post
        fields = [
            'id', 'title', 'subtitle', 'date', 'text', 'active',
            'category', 'category_id',
            'author',
            'image', 'published',
            'tags', 'tag_ids',
            'comments'
        ]


# Comment Serializer --------------------------------------

class CommentSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    post = serializers.PrimaryKeyRelatedField(queryset=Post.objects.all())

    class Meta:
        model = Comment
        fields = ['id', 'post', 'user', 'text', 'date']
