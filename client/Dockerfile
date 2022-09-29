FROM node:16-alpine3.11
WORKDIR /app
COPY . /app/
EXPOSE 3000
RUN ["npm", "install"] // builds image
ENTRYPOINT [ "npm", "run", "start:dev" ] // needs run as it is different to npm start