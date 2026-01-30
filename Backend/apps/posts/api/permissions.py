from rest_framework import permissions

# --- Para Posts ---
class IsSuperUserOrReadOnly(permissions.BasePermission):
    """
    Solo el superuser puede crear, actualizar o eliminar.
    Cualquiera puede leer.
    """
    def has_permission(self, request, view):
        # Lectura permitida a todos
        if request.method in permissions.SAFE_METHODS:
            return True
        # Escritura solo superuser
        return request.user and request.user.is_superuser


# --- Para Comments ---
class IsOwnerOrSuperUserOrReadOnly(permissions.BasePermission):
    """
    - Lectura: cualquiera
    - Crear: solo autenticados
    - Actualizar/Eliminar: el dueño del comentario o superuser
    """
    def has_permission(self, request, view):
        # Lectura permitida a todos
        if request.method in permissions.SAFE_METHODS:
            return True
        # Crear solo autenticados
        if request.method == 'POST':
            return request.user and request.user.is_authenticated
        # Para update/delete se evalúa en has_object_permission
        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        # Lectura permitida a todos
        if request.method in permissions.SAFE_METHODS:
            return True
        # Superuser puede todo
        if request.user.is_superuser:
            return True
        # El dueño puede modificar/borrar su comentario
        return obj.user == request.user
