#!/bin/bash
docker container rm -f db_pg
docker run --name db_pg \
-e POSTGRES_USER=projetogama \
-e POSTGRES_PASSWORD=projetogama \
-e POSTGRES_DB=projetogama \
-p 5432:5432 \
postgres
     