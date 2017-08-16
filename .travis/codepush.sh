#!/bin/bash

if [ "$TRAVIS_BRANCH" == "master" ]; then
    cd android && ./gradlew assembleRelease
    code-push-travis -d Production --platform ["android"] --targetBinary `cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]'`
fi
