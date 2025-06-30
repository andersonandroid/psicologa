# Estágio de Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos de configuração do projeto
COPY package.json pnpm-lock.yaml ./ 

# Instala o pnpm globalmente e depois as dependências do projeto
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copia o restante dos arquivos da aplicação
COPY . .

# Constrói a aplicação para produção
RUN pnpm run build

# Estágio de Produção
FROM nginx:stable-alpine

# Copia os arquivos de build do estágio anterior para o Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove a configuração padrão do Nginx e adiciona uma personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
