# Argentina Developer bot

Bot de Discord con [discord.js](https://discord.js.org/).

## Funciones

- `!ping` responde `¡Pong!`.
- Un mensaje que contiene `hola` o `buenas` en cualquier posición recibe un saludo y uno de tres GIF de Giphy elegidos al azar.
- `!decir TEXTO` envía `El usuario dijo: "TEXTO"`.
- `Mate?` responde con un GIF de mate y `Merienda?` con uno de comida. `Desayuno?`, `Almuerzo?` y `Cena?` tienen listas separadas, todavía vacías.
- No hay límites de frecuencia ni canales configurados.

> Los mensajes cuyo autor es un bot se ignoran. Un mensaje puede activar más de una respuesta.

## Desarrollo

`npm ci` para instalar dependencias.

`node download-media.js` descarga los archivos de `src/media.js` en `downloaded-media/` para revisarlos localmente.

Para iniciar el bot se necesita un token de Discord en la variable de entorno `DISCORD_TOKEN`.

El código solicita los intents `Guilds`, `GuildMessages` y `MessageContent`. La configuración del bot y sus permisos en Discord se gestionan fuera de este repositorio. `node index.js` conecta a Discord.
