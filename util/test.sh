#!/bin/bash
git add .
git commit -m "$(date)"
python -m SimpleHTTPServer
