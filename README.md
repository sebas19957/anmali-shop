# Reportes Mensuales InfoPorcinos

1. Clonar el repositorio
2. Ejecutar

```
yarn install
```

3. Tener Nest CLI instalado

```
npm i g @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo `.env.template` y renombrar la copia a `.env`

6. Llenar la variables de entorno definidas en el `.env`

7. Ejecutar la aplicación de dev:

```
yarn start:dev
```

8. Ejecutar la aplicación en producción:

Primero se debe generar el build con siguien comando `yarn build` y si no se generan errores ejecutar `yarn start:prod`

## Stack Usado

- MondoDB
- Nest
