Add at least 3 Project features.

1.Users can select courses from a list, and the selected courses are displayed in the "Taken Courses" section.
2.Track the total credit hours of the selected courses.
3.Calculation of the total price for the selected courses.it shows the total cost that are chosen by the users.


Discuss how you managed the state in your assignment project.

1. useState():
   -courses:It stores all the objects in an array which are fetched by useEffect()
   - takenCourses: It tracks the courses that have been selected by the user.
   - creditHr: It stores the remaining credit hours that the user can register for.
   - totalCredit: It keeps track of the total credit hours of the selected courses.
   - totalPrice: It stores the total price of the selected courses.

3. useEffect(): useEffect() used for fetching the json data and when the data is received the state is updated.

