package main

import (
	"encoding/json"
	"github.com/davecgh/go-spew/spew"
	"log"
	"os"
)

type FileRef struct {
	directory string
	template  string
}
type FileDef struct {
	name    string
	fileRef FileRef
}
type SiteStructure struct {
	title             string
	outputDirectory   string
	templateDirectory string
	files             []FileDef
}

func main() {
	// enc := json.NewEncoder(os.Stdout)
	file, err := os.Open("example1.json") // For read access.
	if err != nil {
		log.Fatal(err)
	}
	dec := json.NewDecoder(file)
	for {
		var s SiteStructure
		if err := dec.Decode(&s); err != nil {
			log.Println(err)
			return
		} else {
			log.Println(s.title)
			spew.Dump(s)
		}
	}
}
