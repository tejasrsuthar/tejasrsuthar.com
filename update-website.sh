#!/bin/bash
OUTDIR=docs
LOCAL_GHOST="http://localhost:2368/"
SITE_PATH="https://tejasrsuthar.com"
# wget -r -nH -P $OUTDIR -E -T 2 -np -k $LOCAL_GHOST && \
# wget -P $OUTDIR -mpck --user-agent="" -e robots=off -E $LOCAL_GHOST && \
rm -rf $OUTDIR && gssg --url $SITE_PATH --dest $OUTDIR && \
echo "tejasrsuthar.com" > "$OUTDIR/CNAME" && \
git add . && \
git commit -m 'Feat: update blog :tada:' &&  \
"release": "git add . && standard-version -a"
git push origin master