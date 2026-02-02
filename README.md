# BlogProject

Blog desarrollado con Django REST Framework en el backend y React + TypeScript en el frontend. Este repositorio contiene la versión pública del proyecto, sin información sensible, ideal para mostrar estructura, diseño y buenas prácticas.

## 🚀 Stack Tecnológico

- **Backend**: Django + Django REST Framework
- **Frontend**: React + TypeScript + Vite
- **Routing**: React Router
- **Consumo de API**: React Query
- **Estilos**: CSS Modules
- **Control de versiones**: Git + GitHub

## 📦 Estructura del Proyecto
```bash
JovenMatero.Blog/
├── Backend/              ## Django REST API
│ ├── apps/    
│ │ ├── posts/   
│ │ ├── subscriptions/          
│ ├── backend_JM/      
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



