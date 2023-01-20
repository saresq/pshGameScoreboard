## PSH Challenge - Santi AQ

### Game Scoreboard
#### Running the containers
To run the project, clone the repo and enter the root folder.
Once inside, exec

    docker-compose up --build


*Remember that if you installed docker with sudo, then you should run this command also with sudo.*


#### Seeing the Scoreboard

Navigate to [localhost:3000](http://localhost:3000) and see which players scored the Top Ten best scores in PSH Game :)
___
##### Possible improvements:
- Fetching data on app.js and sharing by context with other components (not used because only one component uses the data)
- Making a Route Index for all api endpoints
- Securing API if sensible information is shared
- Putting all functions on utils for code reutilization



#### Made with ♥ by Santi AQ
