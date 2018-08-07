#!/bin/bash
echo Wait for servers to be up
sleep 10

pwd
ls

HOSTPARAMS="--host roach1 --insecure"
SQL="/cockroach/cockroach.sh sql $HOSTPARAMS"

$SQL -e "CREATE DATABASE library;"
$SQL --database=library < /backup.sql
