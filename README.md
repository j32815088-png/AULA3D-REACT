# AULA3D-REACT

> Visualizador interactivo de un aula en 3D construido con React y @react-three/fiber. Soporta control por mouse/teclado y control por sensores del celular (DeviceOrientation) mediante un túnel HTTPS (ngrok) para pruebas en móviles.

---

## Índice
- [Descripción](#descripción)
- [Características principales](#características-principales)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Ejecución (desarrollo)](#ejecución-desarrollo)
  - [Levantar frontend (Vite)](#levantar-frontend-vite)
  - [Acceso con sensores desde móvil (ngrok)](#acceso-con-sensores-desde-móvil-ngrok)
  - [Arrancar ambos servicios (opciones)](#arrancar-ambos-servicios-opciones)
- [Configuración de Vite (ejemplo)](#configuración-de-vite-ejemplo)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Componentes principales](#componentes-principales)
- [Cómo añadir modelos 3D y assets](#cómo-añadir-modelos-3d-y-assets)
- [Buenas prácticas y rendimiento](#buenas-prácticas-y-rendimiento)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## Descripción
AULA3D-REACT es un proyecto didáctico que demuestra cómo integrar React con Three.js a través de `@react-three/fiber` y utilidades de `@react-three/drei`. El objetivo es cargar y visualizar un aula en 3D (puestos de cómputo, mobiliario, pizarra, etc.), ofrecer controles por ratón y permitir el control por sensores (giroscopio/accelerómetro) del teléfono para explorar la escena.

---

## Características principales
- Renderizado 3D con Three.js vía `@react-three/fiber`.
- Controles tradicionales (mouse/trackpad).
- Control por sensores con DeviceOrientationControls (para móviles).
- Capacidad de cargar modelos 3D desde `public/modelos`.
- Configuración pensada para desarrollo local con Vite y acceso móvil vía ngrok (HTTPS).
- Estructura modular para facilitar mejoras y pruebas.

---

## Tecnologías
- React
- @react-three/fiber
- @react-three/drei
- Three.js
- Vite
- ngrok (para túnel HTTPS)
- DeviceOrientationControls (implementación local en src/controles/)

---

## Requisitos
- Node.js (recomendado >= 16.x)
- npm o yarn
- Navegador con WebGL habilitado
- (Opcional para pruebas móviles) Cuenta ngrok para obtener authtoken (recomendado)

---

## Instalación

1. Clona el repositorio y entra en la carpeta:
```bash
git clone https://github.com/Ronaldfer00/AULA3D-REACT.git
cd AULA3D-REACT
```

2. Instala dependencias:
```bash
npm install
# o
# yarn install
```

---

## Ejecución (desarrollo)

### Levantar frontend (Vite)
En la raíz del proyecto:
```bash
npm run dev
```
Vite mostrará direcciones como:
- Local: http://localhost:5173
- Network: http://192.168.x.x:5173

Abre cualquiera en tu navegador de escritorio para ver la escena 3D.

### Acceso con sensores desde móvil (ngrok)
Los navegadores modernos sólo permiten acceso a giroscopio/accelerómetro desde páginas servidas por HTTPS o desde `localhost`. Para probar sensores desde tu teléfono usa ngrok:

1. Instalar ngrok (si no lo tienes):
```bash
npm install -g ngrok
```

2. Crear cuenta en https://ngrok.com y obtener tu authtoken. Luego configúralo (solo la primera vez):
```bash
ngrok config add-authtoken TU_AUTHTOKEN
```

3. Con Vite corriendo, abre otra terminal y ejecuta:
```bash
ngrok http 5173
```
ngrok te mostrará una URL HTTPS (por ejemplo `https://abcd-1234.ngrok-free.app`). Abre esa URL en el navegador de tu móvil y concede permisos de sensores cuando te lo solicite.

> Nota: si usas la opción de ejecutar ngrok desde un script (ver más abajo), asegúrate de que ngrok ya tenga configurado el authtoken en la máquina.

### Arrancar ambos servicios (opciones)
Tienes tres formas habituales de trabajar con Vite + ngrok:

1) Método manual (más sencillo)
- Terminal 1:
  ```bash
  npm run dev
  ```
- Terminal 2:
  ```bash
  ngrok http 5173
  ```

2) Usar `concurrently` para arrancar ambos en una sola orden
- Instala `concurrently` como dependencia de desarrollo:
  ```bash
  npm install --save-dev concurrently
  ```
- Añade estos scripts en `package.json`:
  ```json
  "scripts": {
    "dev:frontend": "vite",
    "dev:ngrok": "ngrok http 5173",
    "dev:all": "concurrently \"npm:dev:frontend\" \"npm:dev:ngrok\""
  }
  ```
- Ejecuta:
  ```bash
  npm run dev:all
  ```
  (Asegúrate de tener ngrok configurado con authtoken y en PATH).

3) Usar `npm-run-all` (paralelo)
- Instala:
  ```bash
  npm install --save-dev npm-run-all
  ```
- En `package.json`:
  ```json
  "scripts": {
    "dev:frontend": "vite",
    "dev:ngrok": "ngrok http 5173",
    "dev": "run-p dev:frontend dev:ngrok"
  }
  ```
- Ejecuta:
  ```bash
  npm run dev
  ```

> Si prefieres no exponer ngrok automáticamente desde npm scripts (por seguridad), usa el método manual.

---

## Configuración de Vite (ejemplo)
En `vite.config.js` configura el servidor para que escuche en todas las interfaces (necesario para acceso en red) y ajusta `strictPort` si quieres evitar puertos alternativos:

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    // allowedHosts: ["abcd-1234.ngrok-free.app"], // opcional: restringe hosts
  },
})
```

---

## Estructura del proyecto (resumen)
- public/
  - modelos/           ← Coloca aquí los archivos .glb/.gltf que cargará la app
  - vite.svg
- src/
  - main.jsx           ← Punto de entrada
  - App.jsx            ← Escena principal, canvas y lógica de carga
  - ControlMovil.jsx   ← Manejo de permisos y control por sensores
  - controles/         ← DeviceOrientationControls.js (implementación/local)
  - assets/            ← texturas, imágenes y recursos
  - Modelos/           ← componentes/modelos locales (si aplica)
- package.json
- vite.config.js
- README.md

---

## Componentes principales
- main.jsx: Monta React en el DOM y renderiza <App />.
- App.jsx: Configura el Canvas de `@react-three/fiber`, las luces, cámara, carga de modelos y la UI de control (sliders, botones).
- ControlMovil.jsx: Solicita permiso para DeviceOrientation en móviles, activa DeviceOrientationControls y conmutador entre control manual y por sensores.
- src/controles/DeviceOrientationControls.js: Implementación o adaptación de DeviceOrientationControls compatible con la escena.
- public/modelos: Carpeta donde se colocan los modelos 3D (ej. `aula.glb`).

---

## Cómo añadir modelos 3D y assets
1. Copia tus archivos `.glb` o `.gltf` a `public/modelos/`.
2. En App.jsx (o en un componente loader) referencia la ruta pública, por ejemplo:
```js
const url = "/modelos/aula.glb";
```
3. Usa `useGLTF` (de `@react-three/drei`) o `GLTFLoader` para cargar el modelo, y coloca el componente en la escena.

Recomendaciones:
- Preferir `.glb` (binario) por menor probabilidad de rutas rotas y mejor empaquetado.
- Optimiza meshes/texturas (decimate, bake, compresión de texturas) para móviles.
- Preload de modelos pesados con `useLoader` + `Suspense`.

---

## Buenas prácticas y rendimiento
- Limita la cantidad de luces en tiempo real; pre-bake sombras si es posible.
- Usa LODs (niveles de detalle) en modelos muy grandes.
- Carga assets de forma asíncrona y muestra un spinner o indicador de progreso.
- Reduce resolución de texturas para dispositivos móviles.
- Desactiva efectos caros (postprocess) cuando detectes dispositivos con GPU limitada.
- Para producción, sirve los assets desde un CDN o configura headers de cache.

---

## Contribuir
1. Abre un issue describiendo la mejora o bug.
2. Crea una rama feature/<nombre-descriptivo>.
3. Envía un Pull Request con la descripción del cambio y pasos para probarlo.
4. Mantén los commits pequeños y con mensajes claros; respeta las reglas de lint si están configuradas (`npm run lint`).

Checklist recomendado para PR:
- [ ] Código lint-eado
- [ ] Documentación actualizada (README si aplica)
- [ ] Pasos para reproducir la prueba

---

## Licencia
No se ha incluido un archivo `LICENSE` en el repositorio. Si deseas una licencia, la recomendación por defecto es MIT. Puedo generar un archivo `LICENSE` con esa licencia si lo quieres.

---

## Contacto
Autor: Ronaldfer00 (GitHub).  
Si quieres que suba este README al repositorio y/o que añada scripts (por ejemplo `concurrently`) o un `docker-compose.yml` para levantar servicios, puedo prepararlos y guiarte en el proceso de commit/push.

---
