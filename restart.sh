# echo ""
# echo "*****yarn tsc create*****" 
# echo ""
# yarn tsc
# echo ""
# echo "*****yarn tsc  create done*****"



echo ""
echo "*****docker-compose down*****" 
echo ""
docker-compose down
echo ""
echo "*****docker-compose down done*****"


echo ""
echo "*****docker rmi utauu-service_utauu-service*****" 
echo ""
docker rmi utauu-service_utauu-service
echo ""
echo "*****docker rmi utauu-service_utauu-service done*****"

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