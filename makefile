# Makefile for WISeAgent Blogs

# Variables
PROJECT_NAME := blogs
CONTENT_DIR := content
OUTPUT_DIR := docs
ELEVENTY := npx @11ty/eleventy

# Default target
.PHONY: all
all: _dep build

# Install dependencies
.PHONY: _dep
_dep:
	@echo "Installing dependencies..."
	npm install

# Build the site
.PHONY: build
build: generate-index
	@echo "Building the site..."
	$(ELEVENTY)

# Generate index.md files for all levels
.PHONY: generate-index
generate-index:
	@echo "Running generate-index.sh script..."
	./tools/generate-index.sh

# Clean the output directory
.PHONY: clean
clean:
	@echo "Cleaning the output directory..."
	rm -rf $(OUTPUT_DIR)

# Serve the site locally
.PHONY: serve
serve:
	@echo "Serving the site locally..."
	$(ELEVENTY) --serve

# Deploy the site (placeholder for deployment logic)
.PHONY: deploy
deploy:
	@echo "Deploying the site..."
	# Add deployment commands here

# Help
.PHONY: help
help:
	@echo "Makefile for WISeAgent Blogs"
	@echo ""
	@echo "Usage:"
	@echo "  make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  all           Install dependencies and build the site"
	@echo "  _dep          Install dependencies"
	@echo "  build         Build the site"
	@echo "  generate-index Generate index.md files for categories and subcategories"
	@echo "  clean         Clean the output directory"
	@echo "  serve         Serve the site locally"
	@echo "  deploy        Deploy the site (placeholder)"
	@echo "  help          Show this help message"