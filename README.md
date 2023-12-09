# Project features.

- Users can select courses from a list, and the selected courses are displayed in the "Taken Courses" section.
- Track the total credit hours of the selected courses.
- Calculation of the total price for the selected courses.it shows the total cost that are chosen by the users.

# Website Link
https://65047864a69fa03eedb2b500--radiant-bombolone-82d2c1.netlify.app/?fbclid=IwAR0j43WCjVyny-w7hiq4rY0wo4FmhcUBALzDg9jnVyJM8ts1P_VDLzyfVmw

# Discuss how i managed the state in this project.

- useState():
   - courses:It stores all the objects in an array which are fetched by useEffect()
   - takenCourses: It tracks the courses that have been selected by the user.
   - creditHr: It stores the remaining credit hours that the user can register for.
   - totalCredit: It keeps track of the total credit hours of the selected courses.
   - totalPrice: It stores the total price of the selected courses.

- useEffect(): useEffect() used for fetching the json data and when the data is received the state is updated.

