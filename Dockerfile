FROM node:18

# Imprimir la versión de Node.js pa cachar que onda
RUN node --version

WORKDIR /app

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/fgarciadiaz92/agenda .

RUN npm install

CMD ["npm", "run", "dev"]
