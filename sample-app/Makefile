push:
	@read -p "Enter Google Cloud Project ID: " project; \
	docker build -t lazy-launch-app .; \
	docker tag lazy-launch-app gcr.io/$$project/lazy-launch-app; \
	gcloud auth configure-docker; \
	docker push gcr.io/$$project/lazy-launch-app