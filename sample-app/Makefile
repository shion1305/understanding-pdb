push:
	@read -p "Enter Google Cloud Project ID: " project; \
	read -p "Enter Artifact Registry Host(us-east1-docker.pkg.dev): " host; \
	host=$${host:-us-east1-docker.pkg.dev}; \
	docker build -t lazy-launch-app .; \
	docker tag lazy-launch-app $$host/$$project/lazy-launch-app/app; \
	gcloud auth configure-docker $$host; \
	docker push $$host/$$project/lazy-launch-app/app