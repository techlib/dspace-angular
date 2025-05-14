#!/bin/bash
#NODE_OPTIONS=--max-old-space-size=8096 yarn start:dev --port 8000 --host=10.0.12.135
# it doesn't work from external machine/ip but should do with --disable-host-check, coz local Curl does (but no JS)
NODE_OPTIONS=--max-old-space-size=10096 yarn start:dev --host=0.0.0.0 --disable-host-check
