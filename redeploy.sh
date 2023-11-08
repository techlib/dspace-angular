#!/bin/bash
cd /opt/dspace-angular-dspace-7.6/
yarn build:prod
rm -rf /opt/dspace-angular/dist
cp -r /opt/dspace-angular-dspace-7.6/dist /opt/dspace-angular/
pm2 restart dspace-ui --update-env
