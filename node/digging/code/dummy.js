var stream1; // readable
var stream2; //writable
var stream3;

stream3 = stream1.pipe(stream2);

// They stream in CHUNKS using binary buffers
// Take READABLE, pipe to a WRITABLE stream
