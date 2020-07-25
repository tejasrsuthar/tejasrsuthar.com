#!/bin/bash
OUTDIR=docs
LOCAL_GHOST="http://localhost:2368/"
SITE_PATH="https://tejasrsuthar.com"

# remove docs first and add generate the links
rm -rf $OUTDIR && gssg --url $SITE_PATH --dest $OUTDIR && \
echo "tejasrsuthar.com" > "$OUTDIR/CNAME" && \
git add . && \
git commit -m 'Feat: update blog :tada:' &&  \
npm run release && \
git push origin master