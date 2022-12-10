# BESTOSO MEDIA & COMMERCE

### Esta web fue creada con vite y react como parte del proyecto final para el curso de React.JS de Coder House, en la misma se pueden encontrar el comercio de la pagina que vende articulos orientados a la programacion y el desarrollo web. El sitio web es apto para simular todo el proceso de compra. Recomiendo una resolucion de 520 x 667px debido a que solo esta hecha la version para moviles, por lo que podria afectar la experiencia de usuario.

## Tecnologias usadas

- React
- SCSS
- Firebase
- Framer Motion
- React Router Dom

## Dependencias 

- sweetalert2
- motion
- react-router-dom
- firebase

## Consideraciones

- Para cada componente se creó un directorio que contiene al componente en sí como también a su hoja de estilos buscando mantener el proyecto organizado.
- La versión de escritorio está pendiente.
- El proyecto cuenta con un total de cinco rutas principales en las cuales el comercio se encuentra en el menu de navegacion "commerce"
- El mismo cuenta con su respectiva navegacion y filtrado entre las categorias.
- Cuenta con los respectivos loaders en las secciones requeridas
- Todo el contenido del sitio esta generado con firebase
- El carrito se mantiene durante toda la experiencia del usuario
- Cuenta con las funciones de agregar al carrito, eliminar items en especifico, vaciar el carrito (al cancelar la compra) y realizar la orden generando una nueva coleccion en firebase
- Cuenta con funciones de filtrado para la busqueda de valores particulares en el apartado "tutorials"
- Cuenta con sus respectivas validaciones de formulario utilizando expresiones regulares:
  - nombre: minimo de 3 caracteres, maximo de 30.
  - email: de dos a 3 caracteres con caracter "@" obligatorio y repeticion de email.
  - telefono: minimo y maximo de 10 caracteres.
- El deploy esta hecho en Vercel y la pagina se puede visualizar desde alli.
- Se creo un gif con el funcionamiento general de la aplicacion


![Vite-React-Google-Chrome-2022-12-09-20-58-48](https://user-images.githubusercontent.com/106178878/206814118-af051486-8d54-4926-a7b6-85bdf7a9081c.gif)
