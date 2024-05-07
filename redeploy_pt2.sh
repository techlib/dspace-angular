#!/bin/bash
cd /opt/src-dspace/client/dspace-angular-dspace-7.6/
yarn build:prod
rm -rf /opt/dspace-angular/dist
cp -r /opt/src-dspace/client/dspace-angular-dspace-7.6/dist /opt/dspace-angular/
cd /opt/dspace-angular/
pm2 restart dspace-ui.json --update-env
