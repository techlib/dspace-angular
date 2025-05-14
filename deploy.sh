#!/bin/bash
cd /opt/src-dspace/client/dspace-angular/
# it's done # yarn build:prod
rm -rf /opt/dspace-angular/dist
cp -v -r /opt/src-dspace/client/dspace-angular/dist /opt/dspace-angular/
cd /opt/dspace-angular/
pm2 restart dspace-ui.json --update-env
sleep 2
pm2 status

