# blogs

## project setup

``` bash
npm init -y
npm install --save-dev @11ty/eleventy
```
Test and deploy
1. Add sample content to `content/`.
2. Run locally: `npx @11ty/eleventy --serve`.
3. Commit and push to `$myrepo`.
4. Create a PR to `main`; merge it to trigger CI/CD.