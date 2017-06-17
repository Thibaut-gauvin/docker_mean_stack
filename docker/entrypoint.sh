#!/usr/bin/env bash

echo "Starting provisioning script ..."

echo ''
echo '---------------------------------------'
echo ''

echo "Install NodeJs packages"
/bin/bash -c "cd /home/docker && yarn install"

echo ''
echo '---------------------------------------'
echo ''
