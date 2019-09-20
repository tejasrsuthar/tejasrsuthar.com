#!/bin/bash
OUTDIR=docs
rm -rf docs/
LOCAL_GHOST="http://localhost:2368/"
SITE_PATH="https://tejasrsuthar.com"
# wget -r -nH -P $OUTDIR -E -T 2 -np -k $LOCAL_GHOST && \
wget -P $OUTDIR -mpck --user-agent="" -e robots=off -E $LOCAL_GHOST && \
git add . && \
git commit -m ':tada: blog update' &&  \
git push origin master