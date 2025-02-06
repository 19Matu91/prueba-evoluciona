# Prueba Técnica - Equipo de Desarrollo Evoluciona

## Descripción
Esta prueba técnica tiene como objetivo evaluar las habilidades en el desarrollo de aplicaciones web con React, el uso de React Context, uso de CSS o SCSS en todos los componentes para garantizar una interfaz visualmente limpia/responsive y el control de versiones con Git.

Se deberán completar los siguientes apartados:

---

## 1. Componente `UserList`
Implementar un componente llamado `UserList` que se utilizará para listar los usuarios.
- El componente debe obtener la lista de usuarios desde la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
- La URL de la API ya está definida en el archivo `.env` del proyecto.
- Se debe utilizar React Context para manejar el estado global del listado de usuarios, permitiendo que esté disponible en toda la aplicación sin necesidad de prop drilling.

---

## 2. Componente `CreateUser`
Implementar un componente llamado `CreateUser`, que contendrá un formulario sencillo para agregar un nuevo usuario al listado.
- Al enviar el formulario, el usuario debe añadirse a la lista global de usuarios gestionada con React Context.

---

## 3. Subir los Cambios a una Nueva Rama
Una vez finalizados los apartados anteriores, se deberán subir los cambios a un repositorio Git siguiendo estos pasos:
1. Crear una nueva rama.
2. Agregar y commitear los cambios realizados.
3. Subir la rama al repositorio remoto.
4. Crear un Pull Request para revisión.

---

## Criterios de Evaluación
- Implementación adecuada de React Context para la gestión del estado global.
- Correcta integración con la API pública para obtener datos.
- Buenas prácticas en la organización del código y manejo de estado.
- Uso de Git para la gestión del código y control de versiones.
- **Uso de CSS o SCSS en todos los componentes para garantizar una interfaz visualmente limpia y responsive.**

¡Buena suerte! 🎯

