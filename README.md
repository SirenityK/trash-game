# Trash-game
Un juego interactivo bastante simple para la campaña cero residuos de la Universidad Autónoma de Baja California (UABC)

Programa implementado a través de la Coordinación General de Proyectos de Gestión Ambiental. Tiene el objetivo de cumplir con los compromisos de la Política Ambiental en el rubro del Manejo Integral de los Residuos en la UABC

Promueve acciones concretas para la prevención y minimización de la generación de residuos, identifica la mejora de procesos, esquemas de valorización de residuos, y evita, al máximo posible, el confinamiento como método de disposición final.

## Building
Para preparar el proyecto para distribuirlo, se requiere tener npm (aunque se recomienda pnpm o bun)

```bash
sudo apt install nodejs
npm i # o pnpm
npm run parcel build src/index.html
```
Se creará un directorio `dist/` con los archivos listos para distribuirse

Si se quiere probar el servidor en tiempo real
```bash
npm run parcel src/index.html
```
se abrirá un servidor de desarrollo en http://localhost:1234 donde los cambios se actualizarán inmediatamente