CONTEXT
PSh-Game is an online game with thousands of players around the world.
In this instance we want to generate stats for matches between players and also a web report with the best players.

A.
Simulate stats of 0 to 10 games between players by inserting randomly into a database statistics of 
player's games with the following information:

Unique identifier on the stat.
Unique identifier of the player.
Nickname (random) (*)
Profile Image (random) (*)
Creation date in timestamp.
Score (random from 1 to 100).

Configure a cron job that executes this operation every 5 minutes.

(*) To generate random nicknames and profile images of the players use the following API:
https://randomuser.me/api

B.
Generate a web report that shows top 10 scores of the players of the whole history and also display the last
time stats were generated.

C.
Adapt the report to automatically update stats every 10 seconds, without refreshing the web page.

D.
Add a button to allow exporting the report to CSV.

NOTES
Developers can choose the technology that best suits his/her skills.

