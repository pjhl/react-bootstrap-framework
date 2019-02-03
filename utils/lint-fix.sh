#!/bin/sh
set -e

sh -c 'cd ${PWD}/packages/rbf-formatter && npm run lint:fix'
sh -c 'cd ${PWD}/packages/rbf-development && npm run lint:fix'
