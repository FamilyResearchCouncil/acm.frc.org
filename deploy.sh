#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
BRANCH_NAME="$1"
COMPOSE_FILE="$SCRIPT_DIR/docker-compose.$BRANCH_NAME.yml"
STACK="acm-$BRANCH_NAME"


test -f "$COMPOSE_FILE" && {
    echo "Deploying stack '$STACK' to the swarm"

    docker stack deploy \
        # pass registry creds to all nodes
        --with-registry-auth \
        # use the compose file to deploy
        -c "$COMPOSE_FILE" \
        # the name of the stack
        "$STACK"

}
