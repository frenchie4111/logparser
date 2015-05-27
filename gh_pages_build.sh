#!/bin/bash

# Merge master
git merge master

# Build
gulp build

# Commit
git commit -am "Build after merge"

# Deploy
git push origin gh-pages

