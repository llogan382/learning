
<?php
class Movie {
    public $title;
    private $rating;

    function __construct($title, $rating){
        $this->title = $title;
        $this->setRating($rating);

    }

    function setRating($rating){
        if($rating == "G" ||
        $rating == "PG" ||
        $rating == "PG-13" ||
        $rating == "R" ||
        $rating == "NR"
        ){ $this->rating = $rating;
        } else {
            $this->rating = "NR"
        }
    }


    function getRating(){
        return $this->rating;
    }
}

$avengers = new Movie("Avengers", "PG-13");

echo $avengers->getRating();