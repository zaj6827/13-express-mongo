# Lab 13, MongoDB.

In this lab, I have created a database using MongoDB, and am using it to get, put, post, and delete.

Using **GET** can get items from the database by their id. You can also grab all of the items available in a collection by calling it. In this case, you could just call "toy" as your arguement, since it's the only endpoint.

**POST** will take the request body, and create a new item. Additionally, the new item will be assigned an ID by MongoDB.

**PUT** will take an ID in as an argument, then update the item that matches the ID with whatever new information has been passed through in the request body.

**DELETE** takes the argument of an ID. It will find the item that matches that ID, then remove it from the database. You can check to see if the ID has been properly deleted by using **'GET'** to confirm it has been removed from the database. 
