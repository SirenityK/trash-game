# Trash-game
Un juego interactivo bastante simple para la campaña cero residuos de la Universidad Autónoma de Baja California (UABC)

Programa implementado a través de la Coordinación General de Proyectos de Gestión Ambiental. Tiene el objetivo de cumplir con los compromisos de la Política Ambiental en el rubro del Manejo Integral de los Residuos en la UABC

Promueve acciones concretas para la prevención y minimización de la generación de residuos, identifica la mejora de procesos, esquemas de valorización de residuos, y evita, al máximo posible, el confinamiento como método de disposición final.

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

## Producción
Este comando sirve para `servir` los archivos generados en el directorio `dist/`, donde finalmente el producto final se construirá y servirá:
```bash
# produce es un comando personalizado en package.json
npm run produce # o `pnpm produce`
```
se abrirá un servidor de desarrollo en http://localhost:3000 donde los cambios se actualizarán inmediatamente