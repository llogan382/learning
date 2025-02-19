package main
import "fmt"

type Course struct {
	Id int
	Name string
	Slug string
	Legacy bool
	Duration Duration
}