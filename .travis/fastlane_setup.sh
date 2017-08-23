#!/bin/bash

if [ "$TRAVIS_BRANCH" == "master" ]; then
   gem install fastlane --no-ri --no-rdoc --no-document
fi
