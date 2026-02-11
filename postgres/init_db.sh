#!/bin/bash
set -e

CONFIG_FILE="../server/src/config.local.json"

if [ ! -f "$CONFIG_FILE" ]; then
  echo "Error: config.local.json not found at $CONFIG_FILE"
  exit 1
fi

# Parse JSON using jq
POSTGRES_DB=$(jq -r '.db.name' "$CONFIG_FILE")
POSTGRES_USER=$(jq -r '.db.user' "$CONFIG_FILE")
POSTGRES_HOST=$(jq -r '.db.host' "$CONFIG_FILE")
POSTGRES_PORT=$(jq -r '.db.port' "$CONFIG_FILE")
POSTGRES_PASSWORD=$(jq -r '.db.password' "$CONFIG_FILE")

export PGPASSWORD=$POSTGRES_PASSWORD

echo "Waiting for Postgres to be ready..."
until psql -h "$POSTGRES_HOST" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c '\q' 2>/dev/null; do
  echo "Postgres is not ready yet..."
  sleep 2
done

echo "Initializing tables..."
psql -h "$POSTGRES_HOST" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f initial_schema.sql
echo "Tables initialized successfully!"