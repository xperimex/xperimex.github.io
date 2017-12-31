#!/bin/bash
npm run build
git add .
git commit -m "$(date)"
git push origin master
