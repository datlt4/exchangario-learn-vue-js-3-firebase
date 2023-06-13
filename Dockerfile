FROM ubuntu/nginx:latest

# Install system dependencies
RUN apt update && apt upgrade -y && \
    apt install -y curl zip unzip nano wget tmux git net-tools && \
    rm -rf /var/lib/apt/lists/* && \
    apt autoremove -y

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt install -y nodejs

RUN ln -sf /app/dist /usr/share/nginx/html/app
COPY nginx.conf /etc/nginx/nginx.conf

# Set working directory
WORKDIR /app
EXPOSE 80
CMD npm install && npm run build && nginx -g 'daemon off;'
