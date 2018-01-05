package codegen

import "testing"

func TestFilePath(t *testing.T) {
	f := getD3Path()
	if f == "" {
            t.Fatalf("expected getD3Path to have a directory name, but it was empty")
    }
}