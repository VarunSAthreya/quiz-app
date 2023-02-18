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

### Docker

-   For development purpose (MongoDB only)

```sh
docker-compose up
```

**NOTE:**

-   This starts only the `mongo` service(`MongoDB` instance).
-   Can use `-d` flag for it to be `detached` from terminal.

-   For production build

```sh
docker-compose -f docker-compose.yml -f docker-compose.production.yml up
```

**NOTE:**

-   This starts all the services: `api`, `web`, `mongo`
-   Can use `-d` flag for it to be `detached` from terminal.
