#!/bin/bash
OUTDIR=docs
LOCAL_GHOST="http://localhost:2368/"
wget -r -nH -P $OUTDIR -E -T 2 -np -k $LOCAL_GHOST && \
git add . && \
git commit -m ':tada: blog update' &&  \
git push origin master
