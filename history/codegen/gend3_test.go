package codegen

import "testing"

func TestFilePath(t *testing.T) {
	testState := &D3SampleState{
		OutputPath: "/barChartTest",
		ChartType:  "barChart",
	}
	f := GetD3Path(testState)
	if f == "" {
		t.Fatalf("expected getD3Path to have a directory name, but it was empty")
	}
}
