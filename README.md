# 🧉 Joven Matero — Demo Público (Frontend + Backend)

Este repositorio contiene una **versión demo y pública** del proyecto **Joven Matero**, compuesto por un **Frontend en React + TypeScript + Vite** y un **Backend en Django REST Framework**.  
El objetivo es mostrar la arquitectura, organización y calidad del código utilizado en el proyecto real, **sin exponer información sensible ni configuraciones de producción**.

---

## 📦 Contenido del repositorio

- **Backend/** → API REST construida con Django + DRF  
- **Frontend/** → Aplicación web construida con React + TypeScript + Vite  

---
## 🚀 Stack Tecnológico

- **Backend**: Django + Django REST Framework
- **Frontend**: React + TypeScript + Vite
- **Routing**: React Router
- **Consumo de API**: React Query
- **Estilos**: CSS Modules
- **Control de versiones**: Git + GitHub
- **Otros**: Python-decouple, etc...

---
## 🔐 Seguridad y privacidad

Este repositorio **no incluye**:

- Archivos `.env` reales  
- Claves, tokens o credenciales  
- Configuraciones de producción  
- Datos reales de usuarios  
- Archivos de build (`dist/`, `__pycache__/`, etc.)

Solo se incluyen archivos `.env.example` con valores ficticios para facilitar la ejecución local.


---
## 📦 Estructura del Proyecto
```bash
JovenMatero.Blog/
├── Backend/              ## Django REST API
│ ├── apps/    
│ │ ├── posts/   
│ │ ├── subscriptions/          
│ ├── backend/      
│ │ ├── media/  
│ │ ├── settings/
│ │ ├── static/            
├── Frontend/             ## React + Vite
│ ├── public/
│ ├── src/
│ │ ├── api/                
│ │ ├── components/        
│ │ ├── context/              
│ │ ├── features/           
│ │ ├── layout/    
│ │ ├── page/           
│ │ └── types/             
```

---
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

## 🧠 Autor

**Jose Duarte** – Desarrollador en formación con enfoque FullStack, actualmente en transición hacia el mundo profesional. Formándome en tecnologías modernas como **React**, **Django**, **Vite**, **CSS Modules**, entre otras herramientas del ecosistema web.
📎[LinkedIn](https://www.linkedin.com/in/joseduarte99/)



