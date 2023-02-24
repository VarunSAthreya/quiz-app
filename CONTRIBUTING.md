# Quiz App

A Quiz web application to create, list, and give quizzes.

## Getting Started

### Prerequisite

-   [NodeJS](https://nodejs.org)

### Installing Dependencies

-   Installing all dependencies

    ```sh
    npm install
    ```

-   Installing a new dependencies

    -   For `api`

    ```sh
    npm i <package name> -w api
    ```

    -   For `web`

    ```sh
    npm i <package name> -w web
    ```

### Scripts

-   Run in development

```sh
npm run dev
```

-   Build the apps

```sh
npm run build
```

-   Format (NOTE: RUN THIS BEFORE EVERY COMMIT)

```sh
npm run format
```

-   Clean dependencies and build files

```sh
npm run clean
```

-   Add dummy data to the DB

```sh
npm run import:db -w api
```

**Note: To add dummy data start the database and server before running the command**

### Docker

1. For development purpose (MongoDB only)
    - This starts only the `mongo` service(`MongoDB` instance).
    - Can use `-d` flag for it to be `detached` from terminal.

```sh
docker-compose up
```

2.  For production build
    -   This starts all the services: `api`, `web`, `mongo`
    -   Can use `-d` flag for it to be `detached` from terminal.

```sh
docker-compose -f docker-compose.production.yml up
```
