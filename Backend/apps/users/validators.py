import re
from django.core.exceptions import ValidationError

class CustomComplexityValidator:
    def validate(self, password, user=None):
        if not re.search(r"[A-Z]", password):
            raise ValidationError("La contraseña debe incluir al menos una letra mayúscula.")
        if not re.search(r"[a-z]", password):
            raise ValidationError("Debe incluir al menos una letra minúscula.")
        if not re.search(r"\d", password):
            raise ValidationError("Debe incluir al menos un número.")
        if not re.search(r"[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]", password):
            raise ValidationError("Debe incluir al menos un carácter especial.")

    def get_help_text(self):
        return "La contraseña debe incluir mayúsculas, minúsculas, números y símbolos especiales."
