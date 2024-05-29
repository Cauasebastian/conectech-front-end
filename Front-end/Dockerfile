# Estágio 1: Construção
FROM node:16 AS build

# Diretório de trabalho na imagem
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Compila a aplicação para produção
RUN npm run build

# Estágio 2: Servir a aplicação
FROM nginx:stable-alpine

# Remove o diretório padrão do nginx
RUN rm -rf /usr/share/nginx/html

# Copia os arquivos compilados da etapa de construção para o diretório padrão do nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração do nginx (opcional, caso precise de uma configuração específica)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expõe a porta que o nginx vai rodar
EXPOSE 80

# Inicia o nginx
CMD ["nginx", "-g", "daemon off;"]
#Para rodar o container, execute o comando:
#docker build -t <nome_da_imagem> .
# docker run -p 8080:80 <nome_da_imagem>
