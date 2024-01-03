# LivelyUtils

Una colección de herramientas para streamers


## Características

1. **Discord bot**: Incluye un bot de Discord que proporciona diversas funciones para los streamers.

2. **Frontend**: Una aplicación web que permite a los streamers visualizar lo que recibe el bot de discord

3. **Backend**: Utiliza Java Spring Boot como backend, proporcionando las funciones básicas necesarias tanto para el bot de Discord como para el frontend.

## Requisitos

Asegúrate de tener instalados los siguientes requisitos antes de comenzar:

- Java 17
- Angular
- SpringBoot
- Node.js
- MySql 
- Nginx (opcional, configurar archivo nginx.conf en el frontend)
- Docker (opcional)

## Instalación

1. Clona el repositorio de GitHub:

   ```bash
   git clone https://github.com/Aguslxrd/LivelyUtils.git

2.
  ```bash
  cd LivelyUtils/restapi
  mvn clean install

  cd LivelyUtils/frontend
  npm install
  
  cd LivelyUtils/discordbot
  npm install

3.En la direccion http://localhost:4200 deberia estar funcionando la aplicacion

