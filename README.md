<div align="center">
  <h1>Curso de backend con Node.js: API REST con Express.js</h1>
</div>

Iniciar el proyecto
```
take <nombre_proyecto>
git init
npm init -y
```
crear archivos de configuración

```
.editorconfig
.eslintrc.json
.gitignore
```

instalar dependencias 
```
npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
```
configurar package.json

```
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js",
    "lint": "eslint"
  },
```
instalar Express

```
npm i express
```
# API Restful
## REST: Representational State Transfer
Es una conveccion que se refiere a servicios web por protocolo HTTP

Metodos:

* Get: Obtener
* Put: Modificar/Actualizar
* Patch: Modificar/Actualizar
* Post: Crear
* Delete: Eliminar
## Patch

[Documentacion](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH)
El método de solicitud HTTP `PATCH` aplica modificaciones parciales a un recurso.

`PATCH` es algo análogo al concepto de “actualización” que se encuentra en [CRUD](https://developer.mozilla.org/en-US/docs/Glossary/CRUD) (Create, Read, Update, Delete), Una solicitud se considera un conjunto de instrucciones sobre cómo modificar un recurso. Contrasta esto con [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT); que es una representación completa de un recurso.`PATCH`

Mo es necesariamente idempotente, aunque puede serlo. Contrasta esto con PUT; que siempre es idempotente.

La palabra “idempotente” significa que cualquier número de solicitudes repetidas e idénticas dejará el recurso en el mismo estado.

Por ejemplo, si un campo de contador de incremento automático es una parte integral del recurso, entonces un PUT lo sobrescribirá naturalmente (ya que sobrescribe todo), pero no necesariamente para .`PATCH`

`PATCH` (como [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)) puede tener efectos secundarios sobre otros recursos.


# Separación de responsabilidades con express.Router

[Lectura](https://profile.es/blog/principios-solid-desarrollo-software-calidad/)

## Single Responsability Principle
Estre principio se trata de que cada artefacto/pieza de código deberia tener solo una única responsabilidad y este principio se puede aplicar para clases, archivos o métodos.

**¿Como aplicamos este principio a nuestro programa?**
Con express estamos creando diferentes enpoints, un ejemplo es `http://localhost:3000/products` para tener todos los metodos de products separados de los otros endpoints podemos crear un archivo.
```
/routes
  - products.js
```
este archivo se encargara de definir todas las rutas de products, de esta forma separamos las responsabilidades, asi lo haremos con todas las rutas especificas que necesitemos.

El nombre del archivo puede tener una *firma* o una forma especifica de notacion dependiendo de tu equipo de desarrollo. Por ejemplo podemos llamar a este archivo `/routes/productsRouter.js` (camelCase) o `/routes/products.router.js` (extension).
Puedes tener de forma camelCase o tipo extension pero NO puedes tener ambas, define al inicio el tipo de firma que van a majerar en tu proyecto.

# Código de estado o HTTP response status codes
Nos permite mandar un mensaje de estado al usuario, 
códigos con su significado con perritos
https://httpstatusdogs.com/
códigos con su significado con gatitos
https://http.cat/

# ¿Qué son los Middleware?

Middleware es software que permite uno o más tipos de comunicación o conectividad entre dos o más aplicaciones o componentes de aplicaciones en una red distribuida. Al facilitar la conexión de aplicaciones que no fueron diseñadas para conectarse entre sí, y al brindar funcionalidad para conectarlas de manera inteligente, el middleware agiliza el desarrollo de aplicaciones y acelera el tiempo de comercialización.

## Casos de uso
- Funciona como pipes (tuberia) Podemos conectar unos con otros, la salida de uno puede ser la entrada del otro.
- Validar datos
- Capturar errores
- Validar permisos
- Controlar acceso
