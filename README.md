# TP Link Christmas tree timer

I have a Bradford exchange Disney christmas tree that my family and I really enjoy. Unfortunately it only runs for about an hour before turning off. To keep it running at the same time as all of my other Christmas decorations, I plugged it into a TP-Link mini smart plug and wrote this script to run every hour on my Raspberry Pi.

The scripts pulls the outlet's status. When it's "on" it switches it off, waits 1 second, and then switches it back on, all using the TP Link local API. This keeps my tree running all day, but only when my smart plug is scheduled to be on or when I've manually turned it on.