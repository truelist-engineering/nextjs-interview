## Project Setup

1. Clone project

```git clone ${SSH_LOCATION}```

2. Install dependencies

``` yarn ```

3. Run dev mode

```yarn dev```

## Intro

This is a technical test that goes over some basic React/Typescript usage and data fetching. You are given a component that fetches an array of users from an API, and it should render a list of users on a left panel and a focused user on the a right panel. Clicking a user from the list on the left should show a detailed user card on the right. The response data for a user will be their name, email, phone number and address. We can assume the id, name, email and phone number will also be present, but the address is an object with optional properties for street, suite, city and zip code. If there is no address it will return an empty object.


## Requirements

1. Implement proper state management for the focused user
2. Optimize the code for Typescript as you see fit
3. Implement proper data fetching and, optionally, fetching state management
4. Fix any errors or sub-optimal code as you see fit


## Bonus Questions

1. How could we further optimize this in the context of a project?
2. What if we wanted to fetch user data prior to rendering the page?
3. What could we put in place if the API call fails or gives us a 429?
4. What kind of accessibility features might improve our code?
5. How can we test this component and ensure stability?
