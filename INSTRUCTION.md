## On MAC, to benchmark:

ab (apache benchmark)

TienTham:nodejs-advanced tientham$ ab -c 50 -n 500 localhost:3000/fast

-n : 500 of times
-c : 50 of request at 1 time

TienTham:nodejs-advanced tientham$ ab -c 1 -n 1 localhost:3000/


# PM2
TienTham:nodejs-advanced tientham$ pm2 start index.js -i 0

-i 0 : setup in cluster mode with logical core selection.

TienTham:nodejs-advanced tientham$ pm2 list
TienTham:nodejs-advanced tientham$ pm2 monit
TienTham:nodejs-advanced tientham$ pm2 delete index
