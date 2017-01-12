#!/usr/bin/env bash

# Start server just for this test run
(npm start &)
# Wait for port 9999 to be listening connections
while ! nc -z 127.0.0.1 9999; do sleep 1; done

# Finally run tests
node node_modules/mocha/bin/mocha server/test/index.test.js

# Kill the app
killall node-uploader
