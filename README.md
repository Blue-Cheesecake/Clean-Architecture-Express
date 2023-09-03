# REST-APIs-Express-Typescript-DI

This repository showcases a RESTful API backend built using Express and TypeScript, emphasizing the Dependency Injection (DI) pattern. The project is structured with a clear separation of concerns, ensuring clean and readable code.

## Goal

The primary goal of this repository is to demonstrate a well-organized folder structure using the separation of concern concept. It serves as an example of how to effectively apply the Dependency Injection pattern in an Express application using TypeScript.

## Project Structure

```
src/
├── config/
│   └── appConfig.ts
├── features/
│   ├── product/
│   │   ├── controllers/
│   │   ├── entities/
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   └── ...
├── index.ts
└── utils/
    ├── datasources/
    ├── dependencies/
    ├── functions/
    ├── log/
    └── models/
    └── ...
```

### On Each Feature

**Controllers**: Handle HTTP requests, delegate business logic to the services, and send responses.
**Entities**: Define the shape of data objects.
**Models**: Represent data structures, including request and response objects.
**Repositories**: Interact with the database, fetch data, and return it to the services.
**Routes**: Define the API endpoints.
**Services**: Contain the business logic and call the data access layer (repositories).

### On Main Utils

#### Datasources

The **Datasources** folder is responsible for managing the connections to data sources. In this project, it primarily deals with the MongoDB database connection using Mongoose.

- **IDataSource:** An interface that defines the contract for any data source. It mandates methods to open and close connections.
- **MongooseDataSource:** An implementation of the **IDataSource** interface for MongoDB using Mongoose. It uses the application properties to establish a connection to the database and provides methods to open and close this connection.

#### Dependencies

The **Dependencies** folder is dedicated to the Dependency Injection (DI) setup using InversifyJS. It contains symbols for dependency injection, interfaces for DI containers, and the main DI container setup.

- **COMMON_DI_TYPES:** Contains symbols that are used as identifiers for dependency injection. These symbols ensure that the correct dependencies are injected where needed.
- **IFeatureDIContainer:** An interface that mandates a **bind** method for feature-specific DI containers.
- **DIContainer:** The main DI container that sets up the application-wide dependencies. It binds implementations to their respective interfaces and ensures that the correct instances are provided when needed.

#### Functions

The Functions folder contains utility functions that are used throughout the application.

### Log

The Log folder is dedicated to logging functionalities within the application. It provides a standardized way to output logs, making it easier to track, debug, and monitor the application's behavior.

### Models

The common Models folder contains data structures and configurations used in entire appllication representing the shape and properties of data objects in the application.

## Getting Started

1. **Clone this repository**
2. **Setup Environment Variables**

- Copy the `.env.dev`, `.env.stg`, and `.env.prd` files and configure them based on your development, staging, and production environments respectively.

The properties of environment file includes 

```
# in .env.dev
port=8080
mongodbURL="..."
mongodbUsedDatabase="dev"
```

3. **Install Dependencies**

```
yarn install
```

4. **Run the Application**

- Debug mode on dev environemnt
```
yarn run debug-dev
```

- Release mode on dev environment

```
yarn run release-dev
```

More run script can be found at `package.json`

## Contribution

Feel free to fork this repository, make changes, and submit pull requests if you want to improve this structure. 
