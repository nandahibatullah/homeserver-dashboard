# Home Server Dashboard
## What is is going to be
So currently its a beginning of a new project for me. I use the popular home server stack consisting of Sonarr, Radarr, Plex and supporting apps.
I want an interface, say a dashboard, that can give me info on whats playing, access functions on those apps via their api. Whatever I can imagine for now...
This is great because I can use this (when its usable) to manage my home server stack from one web app. And if I wanted to expose this app to the internet (e.g. hosting on cloud or home server with port forward),
I only need to worry about exposing one service to the internet, and all the authentication will be handled by this app.

## Currently...
Currently I am building this in the spirit of a docker container that anyone can manage on their own and do what they like with it.
This means that it will just connect to a local db instance that it will need to spin up (Might use Pocketbase).
This just means that you have to host it on your own, and I won't be providing login with Authentication providers like Google.
This is so that it's a seamless experience on just running this container, setting the environment variables needed, and connecting your services.

## Way into the future...
I do plan to have this deployable to the cloud and use a library for Authentication (e.g. AuthO or firebase) but this is mostly for me,
so there might not be great support (e.g docs) for that.