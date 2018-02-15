package codegen

import "net/http"

//D3SampleState -- define all the data needed to generate sample D3 code
type D3SampleState struct {
	OutputPath string `json:"path"`
	ChartType  string `json:"chartType"`
}

//GenD3 -- generate a D3 sample
func GenD3(w http.ResponseWriter, r *http.Request) {

}

//GetD3Path -- the the absolute path name of the directory to write sample D3 code
func GetD3Path(state *D3SampleState) string {
	return state.OutputPath // might need to construct this using both state and config values
}
