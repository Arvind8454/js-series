const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Destructuring OUTSIDE the object
const { courseInstructor: instructor} = course;

// console.log(courseInstructor);  // hitesh
console.log(instructor);



