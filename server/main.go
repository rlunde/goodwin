package main

/* bare bones to start, just to get directory structure set up */
import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rlunde/goodwin/server/codegen"
)

/* using Gorilla: https://github.com/gorilla/mux */
/* http://www.gorillatoolkit.org/pkg/mux */

/* authentication? leave it to later! */
/* make a list of APIs and stub them out */

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", hello)
	r.HandleFunc("/gend3", codegen.GenD3).Methods("POST")
	http.Handle("/", r)
}

func hello(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello!"))
}
