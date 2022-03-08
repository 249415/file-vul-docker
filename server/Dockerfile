FROM node:alpine
WORKDIR /app
COPY package.json ./
RUN yarn
COPY . .
ENV PORT=9090
EXPOSE 9090
CMD ["npm", "start"]