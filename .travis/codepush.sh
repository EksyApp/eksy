#!/bin/bash

if [ "$TRAVIS_BRANCH" == "master" ]; then
    cd android && ./gradlew assembleRelease
    cd ..
    code-push login --accessKey $CODE_PUSH_ACCESS_KEY
    code-push release-react EKSY android --development Production --entryFile index.android.js --targetBinaryVersion "*"
    code-push logout
    #code-push-travis -d Production --platform ["android"] --targetBinary
fi
