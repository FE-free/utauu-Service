# echo ""
# echo "*****yarn tsc create*****" 
# echo ""
# yarn tsc
# echo ""
# echo "*****yarn tsc  create done*****"

echo ""
echo "*****docker volume create*****" 
echo ""
docker volume create --name=utauu-redis &&  docker volume create --name=utauu-mongo
echo ""
echo "*****docker volume create done*****"



echo ""
echo "*****docker-compose start*****"
echo ""
docker-compose up -d
echo ""
echo "*****docker-compose done*****"