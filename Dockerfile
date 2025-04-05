FROM node:23-alpine

RUN npm install -g pnpm 

WORKDIR /app

COPY package* pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD [ "pnpm","start" ]  

