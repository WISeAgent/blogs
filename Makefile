# Makefile for WISeAgent Documentation and Blog

# Variables
NODE = node
NPM = npm
YARN = yarn
NPXA = npx

# Default target
.PHONY: all
all: deps spellcheck lint local

# Install dependencies
.PHONY: deps
deps:
	@echo "Installing dependencies..."
	$(NPM) install
	$(NPM) install --save-dev markdownlint-cli cspell

# Run spell check
.PHONY: spellcheck
spellcheck:
	@echo "Running spell check..."
	$(NPXA) cspell "**/*.{md,mdx}"

# Run markdown linting
.PHONY: lint
lint:
	@echo "Running markdown linting..."
	$(NPXA) markdownlint "**/*.md" --ignore node_modules

# Start local development server
.PHONY: local
local:
    @echo "Running spell check..."
    $(NPXA) cspell "**/*.{md,mdx}"
    @echo "Running markdown linting..."
    $(NPXA) markdownlint "**/*.md" --ignore node_modules
    @echo "Starting local development server..."
    $(NPM) run start

# Clean build artifacts
.PHONY: clean
clean:
	@echo "Cleaning build artifacts..."
	$(NPM) run clear
	rm -rf build/

# Build the site
.PHONY: build
build:
	@echo "Building the site..."
	$(NPM) run build

# Help target
.PHONY: help
help:
	@echo "Available targets:"
	@echo "  all        - Install dependencies, run checks, and start local dev server"
	@echo "  deps       - Install all required dependencies"
	@echo "  spellcheck - Run spell check on markdown files"
	@echo "  lint       - Run markdown linting"
	@echo "  local   - Start local development server"
	@echo "  clean      - Clean build artifacts"
	@echo "  build      - Build the site"
	@echo "  help       - Show this help message"
