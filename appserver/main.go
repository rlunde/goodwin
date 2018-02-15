package main

import (
	"net/http"

	"github.com/gorilla/mux" // http://www.gorillatoolkit.org/pkg/mux
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", hello)
	http.Handle("/", r)
}

func hello(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello!"))
}
