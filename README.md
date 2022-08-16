# Project REST-Rant

## REST-Rant is an app where users can review restaurants.
This is my first project involving **_servers and back-end APIs_** and I am super excited to get the ball rolling.

## Routes

|Method|  Path   | Purpose|
|------|---------|--------|
|  GET |    `/`   |    Home page    |
|  GET | `/places` |     Places index page   |
| POST | `/places` |     Create new place   |
| GET | `/places/new` | Form page for creating a new place|
|GET | `/places/:id` | Details about a particular place|
|PUT | `/places/:id` | Update a particular place|
|Get | `/places/:id/edit` | Form page for editing an existing place|
|DELETE| `/places/:id`| Delet a particular place|
|POST | `/places/:id/rant` | Create a rant about a particular place |
|DELETE| `/places/:id/rant/:rantId`| Delete a rant about a particular place |
| Get| `*` | 404 page (for routes not defined) |

## Database

**Places**

|Field| Type|
|-----|-----|
|_id| Object ID|
|name| string |
|city| string |
|state| string |
|cuisines| string|
|picture |string|

**Rants**
|Field| Type|
|-----|-----|
|_id|Object ID|
|place_id| ref(places) Object_Id|
|rant| Boolean|
|rating| Number|
|comment|string|
|reviewer|string|

## Planning

### User Stories



### Wireframes



## Notes

Idea Bank:
*USe some kind of aggregate for rating
*Auto-complete dropdown
*Update for comments
