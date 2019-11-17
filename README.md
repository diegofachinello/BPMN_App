# BPMN_App

To run this App follow these steps:

Functions: 

- GET
- PUT
- POST
- DELETE

- Tech's:

- Backend built with Spring Boot 2.2 Rest Api 

- Login with Spring Rest Basic Security

- Frontend with Anglular 8 

- TypeScript

- HTML5

- Bootstrap

- CSS3

- Jquery

- Java

- Maven

- JPA

Instruction:

Install:

- Java jdk8u221
- Apache Maven 3.6.2 with MAVEN_HOME configured
- Node v10.16.3
- NPM version 6.9.0
- MySQL Server 

First config the MySQL and/or login connection , in the file application.properties edit:

# Configs to connect in MySQL database
Default 
spring.datasource.url = jdbc:mysql://localhost:3306/bpmn?useSSL=false
spring.datasource.username = root
spring.datasource.password = 

If you want edit the login credentials:

# Credentials for login feature
Degault
spring.security.user.name= diefach
spring.security.user.password= developer

In MySQL execute to create the database ~ bpmn ~ 

# Execute
create database bpmn

To execute the API open PowerShell in the \springboot-jpa-crud-bpmn\springboot-jpa-crud-bpmn 
folder and type ~ mvn spring-boot:run ~ to run the app.

To run FrontEnd

NPM:

- npm install -g @angular/cli

In the folder \springboot-jpa-crud-bpmn\angular8-cli\angular-app-springboot run:

- npm install bootstrap jquery --save

To build and run the frontend:

- ng serve

Access site in localhpst:4200
