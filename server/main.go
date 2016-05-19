package main

/* bare bones to start, just to get directory structure set up */
import "net/http"

/* authentication? leave it to later! */
/* make a list of APIs and stub them out */

func main() {
	http.HandleFunc("/", hello)
	http.ListenAndServe(":8080", nil)
}

func hello(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello!"))
}
