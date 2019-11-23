#!/bin/bash

if !(type "asar" > /dev/null 2>&1); then
    echo "asar not found"
    exit
fi

cp wysiwyg-remover.js /Applications/Slack.app/Contents/Resources/wysiwyg-remover.js

cd /Applications/Slack.app/Contents/Resources/
sudo asar extract app.asar app
mv app.asar app.asar.bak
cat wysiwyg-remover.js | sudo tee -a app/dist/ssb-interop.bundle.js > /dev/null
