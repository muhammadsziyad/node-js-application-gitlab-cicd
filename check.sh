
if [ $( docker ps -a  | grep "$1" |  wc -l ) -gt 0 ]; then
  echo "$1 container exists"
  docker ps -aq | xargs docker stop | xargs docker rm
  echo "Delete container $1 success"
else
  echo "$1 container  does not exist"
fi
