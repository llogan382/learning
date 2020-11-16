# HTTP

It runs over TCP
It is just request and response

What is it?
A method, headers, and a payload.

What is a header?
Metadata.
It tells where request comes from.
Headers can send special info to each server- Like Nginx will get certain headers, and can add headers as well.

What kind of headers:
Host. Tells request where its going.

Headers are powerful-
Proxies: a server that represents different endpoints.

User agent: browser info, etc. Use a library if you are trying to sniff this.

Set-cookie: Sets stateful information. If there are too many cookies, it will slow down the requests (and the site)

X- header- custom headers

REsponse Headers- What the server sends you.
Status Code- 400 (client error), 500 (server error), 2xx (success)

Proper status code for successfult POST request?
200