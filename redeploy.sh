#!/bin/bash
cd /opt/src-dspace/client/dspace-angular/
yarn merge-i18n -s /opt/src-dspace/client/dspace-angular/src/themes/custom/assets/i18n/
yarn build:prod
git restore src/assets/i18n
rm -rf /opt/dspace-angular/dist
cp -r /opt/src-dspace/client/dspace-angular/dist /opt/dspace-angular/
cd /opt/dspace-angular/
pm2 restart dspace-ui.json --update-env
