# Trash-game

Un juego interactivo bastante simple para la campaña cero residuos de la Universidad Autónoma de Baja California (UABC)

Programa implementado a través de la Coordinación General de Proyectos de Gestión Ambiental. Tiene el objetivo de cumplir con los compromisos de la Política Ambiental en el rubro del Manejo Integral de los Residuos en la UABC

Promueve acciones concretas para la prevención y minimización de la generación de residuos, identifica la mejora de procesos, esquemas de valorización de residuos, y evita, al máximo posible, el confinamiento como método de disposición final.

## Instalación

El repositorio contiene una sección de publicaciones listas para su distribución en servidores web como apache u nginx (ya que solo son archivos estáticos); para comenzar a usarlo, descargue el archivo [trash-game.tar.xz](https://github.com/SirenityK/trash-game/releases/latest/download/trash-game.tar.xz), descomprimalo y, en la carpeta dist, servir los archivos estáticos ya sea usando apache o [serve](https://www.npmjs.com/package/serve) con `serve dist/`

#### Configuración para apache

```apache
<Directory "$LOCALIZACION_DE_LOS_ARCHIVOS/dist">
    Options +Indexes
    DirectoryIndex disabled
</Directory>
```

#### Configuración para nginx

```nginx
location / {
    autoindex on;
    root /home/sirenityk/git/trash-game/dist;

    # opcional
    gzip on;incluir los mime types aquí
    gzip_types text/plain text/css text/javascript application/x-javascript text/xml text/x-json text/x-markdown image/svg+xml; # opcional
}
```

## Compilación

Para preparar el proyecto y distribuirlo, se requiere tener [npm](https://www.npmjs.com/package/npm) (aunque se recomienda [pnpm](https://pnpm.io/installation))

```bash
sudo apt install nodejs
npm i # o pnpm
npm run build
```

Se creará un directorio `dist/` con los archivos listos para distribuirse

En caso de que desee ver el proyecto en tiempo real, ejecute una de las siguientes opciones:

```bash
npm run dev
```

```bash
pnpm dev
```

### Producción

Este comando sirve para `servir` los archivos generados en el directorio `dist/`, donde finalmente el producto final se compilará y servirá:

```bash
# produce es un comando personalizado en package.json
npm run produce # o `pnpm produce`
```

se abrirá un servidor de desarrollo en http://localhost:3000 donde los cambios se actualizarán inmediatamente
