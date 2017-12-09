# goodwin
A conversational assistant for software development

Planned Design:

A client-side component developed in node/electron with installation instructions for 
Windows and Unix/Mac. This will allow the client to read and write local files, and 
execute compilers, etc. Obviously, this also increases the need to security and transparency.

A server written (probably) in Rails that provides support for the client,
add-ons, updates, etc.

Initially, the client will do most things as Q&A, with answers stored locally.

I've been thinking a lot about client/server stuff. I think for the app to
be even remotely "intelligent" over time, all the core logic has to be on the
server side. The client should probably just parse conversation, display results,
and save/send/retrieve content from the server.

This implies that either the server is pretty secure, or the client doesn't
send anything sensitive to the server (e.g. no passwords or such). If it's being
used for code generation, perhaps "installation specific configuration" (as
opposed to configuration based on choices such as whether the environment is
development, test, or production) should stay on the client side.

I think it would be a good idea to look at the 12 factor app stuff to see
what kind of partitioning would make sense. (http://12factor.net/)

