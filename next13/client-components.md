# Client components

for file in /dir/*
do
  cmd [option] "$file" >> results.out
done
for file in /Users/lukelogan/Desktop/converted-vids/*; do
  echo "${file##*/}"
  ffmpeg -i ${file##*/} -c:v copy -c:a copy ${file##*/}.mp4
done


for file in /Users/lukelogan/Desktop/converted-vids/*; do
echo `basename "$filename"`
done

for filename in $(ls)
do
  echo $filename
  if [ "${file: -4}" == ".mov" ]; then
    ffmpeg -i $filename -c:v copy -c:a copy $filename.mp4
  else
    echo $filename
  fi
done;



for filename in $(ls)
do
  if [ "${file: -4}" == ".mov" ]; then
    echo $filename
  else
    echo $filename
done;

for filename in $(ls)
do
    if [ "${filename: -4}" == ".mov" ]; then
      echo $filename
    else
      echo "not a movie"
done;



if [ $AGE -lt 13 ]; then
	echo "You are a kid."
elif [ $AGE -lt 20 ]; then
	echo "You are a teenager."
elif [ $AGE -lt 65 ]; then
	echo "You are an adult."
else
	echo "You are an elder."
fi
