#!/bin/bash

# Checkout gh-pages
git checkout gh-pages

# Merge master
git merge master

# Build
gulp build

# Commit
git commit -am "Build after merge"

# Deploy
git push origin gh-pages

# Checkout Master
git checkout master

