PROJECT_NAME :="my-blog"
NOW := $(shell date +'%Y%m%d%H%M%S')
TAG := $(shell git describe --always --tags --abbrev=0 | tr -d "[\r\n]")
COMMIT := $(shell git rev-parse --short HEAD| tr -d "[ \r\n\']")

LOCAL_TAG := "local-"$(NOW)
LATEST_TAG := "latest"

TKE_HOST := costa92
DOCKER_IMAGE_TKE_LOCAL := $(TKE_HOST)/$(shell echo $(PROJECT_NAME) | sed 's^\/^\/local\/^')
DOCKER_IMAGE_TKE_PROD := $(TKE_HOST)/$(shell echo $(PROJECT_NAME) | sed 's^\/^\/prod\/^')


.SECONDARY: $(wildcard Dockerfile)
Dockerfile:
	docker build -t $(PROJECT_NAME) .

build/prod:
	pnpm install
	pnpm run build
	docker build -q -t $(DOCKER_IMAGE_TKE_LOCAL):$(TAG)  --platform linux/amd64 .
	docker push $(DOCKER_IMAGE_TKE_LOCAL):$(TAG)

.PHONY: build/test
build/test: clean
	pnpm install
	pnpm run build:test
	docker build -q -t $(DOCKER_IMAGE_TKE_LOCAL):$(LOCAL_TAG) --platform linux/amd64 .
	docker push $(DOCKER_IMAGE_TKE_LOCAL):$(LOCAL_TAG)

.PHONY: clean
clean:
	@rm -rf dist/

lint:
	pnpm lint

local/test: build/test Dockerfile
	@docker run --name $(PROJECT_NAME) -p 80:80 -d   $(DOCKER_IMAGE_TKE_LOCAL):$(LOCAL_TAG)