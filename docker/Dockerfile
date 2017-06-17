FROM ubuntu:14.04

ARG DOCKER_USER
ARG NODE_PORT

# Install Base for dev
RUN apt-get update \
    && apt-get install -y \
        build-essential \
        git \
        curl \
        wget \
        sudo \
        htop \
        ncdu \
        multitail

# Install NodeJs last LTS release
RUN curl -o /tmp/setup_node.sh https://deb.nodesource.com/setup_6.x
RUN chmod +x /tmp/setup_node.sh
RUN /tmp/setup_node.sh
RUN apt-get update \
    && apt-get install -y \
    nodejs

# Install Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update \
    && apt-get install -y \
    yarn

# Add user DOCKER_USER defined in .env & give sudo privilege
RUN adduser --disabled-password --gecos '' ${DOCKER_USER}
RUN adduser ${DOCKER_USER} sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# Override default bash config
ADD .bashrc /home/${DOCKER_USER}/.bashrc

# Add Provisionning Scripts
ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Install pm2 globally
# Note that installing pm2 with yarn cause issue with "pm2-docker"
RUN npm install pm2 -g

# Expose Port
EXPOSE ${NODE_PORT}

# Tell docker to run pm2 in background
CMD ["pm2-docker", "ecosystem.config.js"]
