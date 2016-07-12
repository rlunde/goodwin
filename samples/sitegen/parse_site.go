package main

import (
	"encoding/json"
	"github.com/davecgh/go-spew/spew"
	"log"
	"os"
)

type FileRef struct {
	Directory string `json:directory`
	Template  string `json:template`
}
type FileDef struct {
	Name    string
	FileRef FileRef
}
type SiteStructure struct {
	Title             string    `json:title`
	OutputDirectory   string    `json:outputDirectory`
	TemplateDirectory string    `json:templateDirectory`
	Files             []FileDef `json:files`
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
		_ = "breakpoint"
		if err := dec.Decode(&s); err != nil {
			log.Println(err)
			return
		} else {
			log.Println(s.Title)
			spew.Dump(s)
		}
	}
}
