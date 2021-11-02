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
