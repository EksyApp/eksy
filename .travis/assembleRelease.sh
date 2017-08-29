#!/bin/bash

if [ "$TRAVIS_BRANCH" == "master" ]; then
    cd android && ./gradlew assembleRelease
    fastlane beta --verbose # ok, I set up $root/eksy/EKSY/android to be the fastlane working dir :p
    cd ..
    code-push login --accessKey $CODE_PUSH_ACCESS_KEY
    code-push release-react EKSY android -d Production --targetBinaryVersion "*"
    code-push logout
    #code-push-travis -d Production --platform ["android"] --targetBinary
fi
