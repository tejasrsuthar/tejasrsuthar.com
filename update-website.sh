#!/bin/bash
OUTDIR=docs
LOCAL_GHOST="http://localhost:2368/"
SITE_PATH="https://tejasrsuthar.com"

# remove docs first and add generate the links
rm -rf $OUTDIR && gssg --url $SITE_PATH --dest $OUTDIR && \

# required for gitHub Pages
echo "tejasrsuthar.com" > "$OUTDIR/CNAME" && \
git add . && \
git commit -m 'Feat: update blog :tada:' &&  \

# tag the release
npm run release && \

# push the code to repo
git push origin master