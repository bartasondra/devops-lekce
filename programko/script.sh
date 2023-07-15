name="ONDRA"
age=25
folder=./abc/yaml/xyz/$name

text=$(cat programko/test.yaml)

echo $text

mkdir -p $folder

cd $folder

touch config.yaml

echo $text > config.yaml

if [ $age -gt 18 ]; then 
    echo "You are an adult." >> config.yaml
else
    echo "You are a minor." >> config.yaml
fi




cat config.yaml

