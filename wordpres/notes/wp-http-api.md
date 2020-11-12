# From a WP TV video

[Here is the link](https://wordpress.tv/2020/11/04/topher-derosia-introduction-to-the-wordpress-http-api/) to the video.

Basically, it gets data from another website.

Uses?
- Fetch news headlines
- get movie listings
- headless WP
- mobile appls
- sending updates to other websites
- Communicating with other sites in any way

Data can be returned in different formats:
- JSON
- XML

When you do a request, you will get HEADERS or BODY.

wp_remote_response_code() will check if a site is up or not every day.

CACHE IT.
Use TRANSIENTS to store the results of your cache.

Transients can store results as long as is needed.
