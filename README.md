# BlogProject

Blog profesional desarrollado con Django REST Framework en el backend y React + TypeScript en el frontend. Este repositorio contiene la versión pública del proyecto, sin información sensible, ideal para mostrar estructura, diseño y buenas prácticas.

## 🚀 Stack Tecnológico

- **Backend**: Django + Django REST Framework
- **Frontend**: React + TypeScript + Vite
- **Routing**: React Router
- **Consumo de API**: React Query / Axios
- **Estilos**: CSS Modules
- **Control de versiones**: Git + GitHub

## 📦 Estructura del Proyecto

blogproject/
├── backend/              ## Django REST API
│ ├── blog/                 # App principal
│ └── users/                # Autenticación y perfiles
├── frontend/             ## React + Vite
│ ├── src/
│ │ ├── components/         # Componentes reutilizables
│ │ ├── pages/              # Vistas y rutas
│ │ ├── services/           # Conexión con la API
│ │ ├── hooks/              # Hooks personalizados
│ │ └── styles/             # Estilos con CSS Modules

## 🛠 Instalación

### Backend

```bash
cd backend
python -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

🧠 Autor
Jose – Frontend Developer | Participante de INFORMATORIO Chaco 2025 Especializado en diseño visual, branding técnico y layouts adaptables.
