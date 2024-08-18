#!/bin/bash

#
# Scaffold component
#
# Scaffold a new component for the project, creating basic versions of the files
# required to get up and running quickly.
#
# Usage:
# ./support/scaffold-component.sh component-name folder-name
#

if [ -z "$1" ]; then
    echo "Please provide a name for the component."
    exit 1
fi

COMPONENT_NAME="$1"
FOLDER_PATH="${2:-}"

# The base path is where the component will be created.
BASE_PATH="src/components"

# If a folder path is provided, append it to the base path
if [ -n "$FOLDER_PATH" ]; then
    BASE_PATH="$BASE_PATH/$FOLDER_PATH"
fi

mkdir -p "$BASE_PATH/$COMPONENT_NAME"
cd "$BASE_PATH/$COMPONENT_NAME"

# Generate a PascalCase version of our name
PASCAL_CASE_NAME=$(echo "$COMPONENT_NAME" | awk -F- '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1' OFS='')

# Determine the script's directory
SCRIPT_DIR=$(dirname "$0")

# Vue component
TEMPLATE_FILE="$SCRIPT_DIR/templates/component.vue"
OUTPUT_FILE="$COMPONENT_NAME.vue"

sed "s/{{COMPONENT_NAME}}/$COMPONENT_NAME/g; s/{{PASCAL_CASE_NAME}}/$PASCAL_CASE_NAME/g" "$TEMPLATE_FILE" > "$OUTPUT_FILE"

# Cypress test suite
TEMPLATE_FILE="$SCRIPT_DIR/templates/component.cy.js"
OUTPUT_FILE="$COMPONENT_NAME.cy.js"

sed "s/{{COMPONENT_NAME}}/$COMPONENT_NAME/g; s/{{PASCAL_CASE_NAME}}/$PASCAL_CASE_NAME/g" "$TEMPLATE_FILE" > "$OUTPUT_FILE"

# Unit test suite
TEMPLATE_FILE="$SCRIPT_DIR/templates/component.test.js"
OUTPUT_FILE="$COMPONENT_NAME.test.js"

sed "s/{{COMPONENT_NAME}}/$COMPONENT_NAME/g; s/{{PASCAL_CASE_NAME}}/$PASCAL_CASE_NAME/g" "$TEMPLATE_FILE" > "$OUTPUT_FILE"

PURPLE='\033[1;35m'
BLUE='\033[1;34m'
RESET_COLOUR='\033[0m'

# Print the success message
echo -e "\nComponent ${PURPLE}$COMPONENT_NAME${RESET_COLOUR} scaffolded successfully in ${BLUE}$BASE_PATH/$COMPONENT_NAME${RESET_COLOUR}.\n"
echo -e "${PURPLE}$COMPONENT_NAME${RESET_COLOUR}"
echo "  ↳ $COMPONENT_NAME.vue"
echo "  ↳ $COMPONENT_NAME.cy.js"
echo "  ↳ $COMPONENT_NAME.test.js"

