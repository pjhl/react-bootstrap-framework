#!/bin/sh
set -e

sh -c 'cd ${PWD}/packages/rbf-formatter && npm run lint'
sh -c 'cd ${PWD}/packages/rbf-development && npm run lint'
sh -c 'cd ${PWD}/packages/rbf-forms && npm run lint'
