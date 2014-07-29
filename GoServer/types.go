package main

type Job struct {
    Name string
    Position string
    Location string
    Posted string
    IndustryId int64
    Area string
    Content string
}

type Industry struct {
    Id int64
    Abbreviation string
    Name string
}