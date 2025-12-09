# GitHub Actions Workflows

This directory contains automated workflows for the jd-portfolio project.

## Workflows

### 1. `pr-checks.yml` - PR Sanity Checks

**Trigger**: Runs on every pull request to the `main` branch

**Purpose**: Ensures code quality and build integrity before merging PRs

**Jobs**:

- **PNPM Build & Lint** (`pnpm-checks`)
  - Sets up Node.js 22 and pnpm 9
  - Installs dependencies with caching
  - Runs ESLint to check code quality
  - Performs TypeScript type checking
  - Builds the project to ensure no build errors

- **Docker Build** (`docker-build`)
  - Validates the production Docker image builds successfully
  - Validates the development Docker image builds successfully
  - Uses GitHub Actions cache to speed up builds

- **All Checks Passed** (`status-check`)
  - Final job that depends on all previous jobs
  - Ensures all checks completed successfully
  - Reports overall status

**Required to Pass**: Yes - when branch protection is configured, PRs cannot be merged if these checks fail.

### 2. `deploy.yml` - Build and Deploy

**Trigger**: Runs on push to the `main` branch

**Purpose**: Builds and pushes Docker images to Docker Hub after merging

**Jobs**:

- Builds production Docker image
- Pushes to Docker Hub with commit SHA tag
- Uses repository secrets for Docker Hub authentication

## Setup Instructions

### For Branch Protection

To prevent merging PRs when checks fail, see [BRANCH_PROTECTION.md](../BRANCH_PROTECTION.md) for detailed setup instructions.

**Quick Summary**:
1. Go to repository Settings → Branches
2. Add/edit rule for `main` branch
3. Enable "Require status checks to pass before merging"
4. Select: `PNPM Build & Lint`, `Docker Build`, `All Checks Passed`

### Required Secrets

The `deploy.yml` workflow requires these repository secrets:

- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_TOKEN`: Docker Hub access token

Add these in: Settings → Secrets and variables → Actions → New repository secret

## Local Testing

Run the same checks locally before pushing:

```bash
# Install dependencies
pnpm install

# Lint
pnpm run lint

# Type check
npx tsc --noEmit

# Build
pnpm run build

# Docker build
docker build --target production -t jd-portfolio:test .
```

## Workflow Status Badges

Add these to your main README.md to display workflow status:

```markdown
![PR Checks](https://github.com/YOUR_USERNAME/jd-portfolio/actions/workflows/pr-checks.yml/badge.svg)
![Deploy](https://github.com/YOUR_USERNAME/jd-portfolio/actions/workflows/deploy.yml/badge.svg)
```

Replace `YOUR_USERNAME` with your GitHub username.