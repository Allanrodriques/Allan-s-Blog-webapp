FROM node:alpine AS development

ENV NODE_ENV development
WORKDIR /react-app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm","start"]
EXPOSE 5000