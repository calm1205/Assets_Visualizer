
args=Initial

up:
	docker compose up -d

run:
	npm run build
	npm run start:dev

postgres:
	docker compose exec postgres bash

# make migrate-gen args=<migration_name>
migrate-gen:
	npm run build
	npx typeorm migration:generate -n $(args)

migrate:
	npm run build
	npm run typeorm migration:run

seed:
	npm run build
	npm run seed:run

drop:
	npm run typeorm schema:drop

reset:
	npm run build
	npm run typeorm schema:drop
	npm run typeorm migration:run
	npm run seed:run

sample: 
	@echo 'args is $(args).'