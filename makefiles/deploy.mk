UID_LOCAL        ?= "$(shell id -u)"
GID_LOCAL        ?= "$(shell id -g)"
IMAGE_BUILD       = node:12.16.1-alpine3.9

npm.install: ##@Global install dependencies.
	docker container run --workdir "/${APP_DIR}" --rm -i \
		-u ${UID_LOCAL}:${GID_LOCAL} \
		-v "${PWD}/${APP_DIR}":/${APP_DIR} \
		${IMAGE_BUILD} \
		yarn install

webpack.build:
	docker container run --workdir "/${APP_DIR}" --rm -i \
		-u ${UID_LOCAL}:${GID_LOCAL} \
		-v "${PWD}/${APP_DIR}":/${APP_DIR} \
		${IMAGE_BUILD} \
		yarn build
	@ls -al ${PWD}/${APP_DIR}/dist

webpack.build.appcontainer:
	docker container run --workdir "/${APP_DIR}" --rm -i \
		-u ${UID_LOCAL}:${GID_LOCAL} \
		-v "${PWD}/${APP_DIR}/src/${APP_VIEW}":/${APP_DIR} \
		${IMAGE_BUILD} \
		yarn build --configuration ${ENV}

staticfiles.deploy:
	aws s3 sync \
		${PWD}/${APP_DIR}/dist \
		s3://${DEPLOY_BUCKET}/${APPLICATION}/ \
		--delete \
		--acl public-read \
		--region ${DEPLOY_REGION}