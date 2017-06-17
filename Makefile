############################
#   MAKEFILE FOR PROJECT   #
############################

# If you want to run a comand for the prod environment,
# Simply add "-e env=prod" at the end of your make command
#
# Example:
# $ make start -e env=prod

# dev is the default environment, it use the docker-compose.yml file
# prod use the docker-compose-prod.yml file
env ?= dev

ifeq ($(env),prod)
CONFIG = docker-compose-prod.yml
else
CONFIG = docker-compose.yml
endif

.SILENT:
.PHONY: build

#####
# Vars
DOCKER_COMPOSE = docker-compose -f$(CONFIG)

#####
# Executed when you run "make" cmd
# Simply run "start" tasks
all: start

#####
# Start containers (Also builds images, if there not exists)
start:
	$(DOCKER_COMPOSE) up -d

#####
# Restart containers
reload:
	$(DOCKER_COMPOSE) restart

#####
# Stop containers
stop:
	$(DOCKER_COMPOSE) kill
	$(DOCKER_COMPOSE) stop

#####
# Stop & Remove containers
remove: stop
	$(DOCKER_COMPOSE) down

#####
# Start new bash terminal inside the app Container
ssh: start
	$(DOCKER_COMPOSE) run app bash

#####
# Display logs of the current running containers (Press "Ctrl + c" to exit)
logs:
	$(DOCKER_COMPOSE) logs -f

#####
# Remove only the curently stopped containers
clean-containers:
	$(DOCKER_COMPOSE) rm --force

#####
# Provision app for the first use
init: start
	$(DOCKER_COMPOSE) run app /bin/sh -ec '/entrypoint.sh'
