# Benefits By Design Digital Buzzboard
MitchellUngar.github.io
-----------------------
Getting Started
---------------
* This site uses github pages, and pubnub to allow webrtc, and DNS servers. 
  Create a new account with pub nub, they will give you a free use for their servers.
  Keep in mind this is not ideal for 24/7 use of the webcam because there is a certain amount of usage 
  you get per month for the webcam.

* After you have created a account, create a github io page. The page has to be the same
  name as your username, and is not https. So it is not protected, 
  '''
  DO NOT PUT SENSITIVE INFORMATION
  '''

* Once both of these steps are finished you are free to create a simple website. Copy the repo you just 
  created on your desktop and add a index.html file. Create a simple website that says 'hello world'
  just to make sure your github io is working. 

* After the simple html page is created push it back up to your repo and then you will see your github
  has been updated. If all steps have been followed correctly then you will be able to type in 
  http://username.github.io into your URL and go into your new published website.(Page should say
  'hello world'

Using WEBTRC
------------
Pubnub is a great resource for getting yourself up and running with WEBRTC. A lot of people used to go
towards node.js for it but their libraries are slowly disappearing and making it harder to make is a 
live on its own site. 
What pubnub does is gives you a publish key and a subscribe key. These keys allow you to access their
ICE Servers which contain a STUN and a TURN server. The STUN server allows you to make the connection
while the TURN server keeps the connection running. 

0. The first thing I would do would be to put a link to the library that pubnub allows you to use in
   the header of your site. 

<script src="(https://cdn.pubnub.com/pubnub.min.js)">

0. After that you should place the javascript code at the bottom of your page that makes the initial 
   connection.

0. Final step is to add the html code that allows you to type in your login name and call name 
   and the buttons that allow it.

# Using the Site

Editing
-------
0. Go to http://mitchellungar.github.io
0. Sign in using your privledges.
0. Do the edits that you want to do.
0. Add a couple notifications, or events, maybe even a youtube embed.

If you want the video to loop the rel=0 code is already there, just 
copy paste the embed code to loop the video, and change the seemingly
random letters and numbers in the playlist area. 
You can save to a .csv file for your notifications, or load from a 
preexisting file. The load doesn't have to be from a .csv file, it can
be a text file from notepad. 
Submit and move to the next page. 

Webcam Conference
-----------------
0. Type in any login name, login.
0. Type designated login name that someone else is using.
0. click call, and it will instantly connect!

Publishing the site
-------------------
0. git status
0. git add .
0. git commit -m'Whatever changes you made'
0. git push -u origin master
0. Username
0. Password 

