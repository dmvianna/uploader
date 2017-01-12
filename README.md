# uploader
I want to stream big files to the server, avoiding mistakes

### Initial plan
There should be a client and a server
#### Client
The client should accept drag-and-drop CSV files. It will read the first few bytes and decide if the headers correspond to any of a number of expected datasets. If yes, it will stream the file to the server. If not, it will complain.
#### Server
It will receive the file, check its head, and replace the corresponding database table with it. Yes.
#### Tests?
Of course.
