FROM node:16-alpine
WORKDIR /app
COPY . /app/
EXPOSE 5000
RUN ["npm", "install"] // builds image
ENTRYPOINT [ "npm", "run", "start:dev" ] // needs run as it is different to npm start