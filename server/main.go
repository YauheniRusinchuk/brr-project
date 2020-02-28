package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type User struct {
	ID        int    `json:"id"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Active    bool   `json:"active"`
}

var users []User

func getUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

func main() {
	r := mux.NewRouter()
	users = append(users, User{1, "Eugene", "Rusinchuk", false})
	users = append(users, User{2, "James", "Boxtal", true})

	r.HandleFunc("/users", getUsers).Methods("GET")
	log.Fatal(http.ListenAndServe(":5000", r))
}
