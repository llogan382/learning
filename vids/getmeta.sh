cd "/Volumes/localLogan/Lukes iphone Camera Roll Backup/"


#!/bin/bash
shopt -s nullglob

for f in *.{mov,MOV,m4v,M4V}
    do
        height=`mdls -raw -name  kMDItemPixelHeight "$f"`
        width=`mdls -raw -name  kMDItemPixelWidth "$f"`

        printf "File: $f\n"
        printf "> Dimensions: $height x $width \n\n"
    done

printf "All done! \n"
