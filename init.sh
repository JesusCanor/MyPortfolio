export NODE_OPTIONS="--max-old-space-size=4096"
pnpm run build
rm -rf /var/www/html/82.223.37.135/*
cp -r ./dist/* /var/www/html/82.223.37.135