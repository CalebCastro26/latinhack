.DEFAULT_GOAL := help

## GENERAL VARS ##
ENV            ?= lab
DEPLOY_BUCKET  ?= isst.csticorp.biz
APP_DIR        ?= lab

## INCLUDE TARGETS ##
-include makefiles/*.mk
