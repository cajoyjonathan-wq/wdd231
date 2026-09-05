const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const courseCard = document.querySelector('.course-cards');

function createCourseCard(filteredCourses) {
    document.querySelector(".course-cards").innerHTML = "";
    filteredCourses.forEach((course) => {
        const card = document.createElement("section");
        const subject = document.createElement("h3");
        const number = document.createElement("h3");
        const title = document.createElement("h3");
        const credits = document.createElement("p");
        const completed = document.createElement("p");

        const headerGroup = document.createElement("div");
        const pGroup = document.createElement("div");
        const completedP = document.createElement("div");

        card.classList.add("section-card");
        headerGroup.classList.add("headers");
        pGroup.classList.add("ps");
        completedP.classList.add("complete");

        

        headerGroup.appendChild(subject);
        headerGroup.appendChild(number);
        headerGroup.appendChild(title);



        subject.textContent = course.subject;
        number.textContent = course.number;
        title.textContent = course.title;
        credits.textContent = `Credits: ${course.credits}`;


        if (course.completed === true) {
            completed.textContent = "Completed";
            card.classList.add("completed");
            card.classList.remove("required");
        } else {
            completed.textContent = "Required";
            card.classList.add("required");
            card.classList.remove("completed");
        }

        pGroup.appendChild(credits);
        completedP.appendChild(completed);
        card.appendChild(headerGroup);
        card.appendChild(pGroup);
        card.appendChild(completedP);

        courseCard.appendChild(card);
    })

};

createCourseCard(courses);

// const all = document.querySelector("#all");

// all.addEventListener("click", () => {
//     createCourseCard(courses);
// });

// const cse = document.querySelector("#CSE");

// cse.addEventListener("click", () => {
//     const cseFiltered = courses.filter(course => course.subject === "CSE");
//     createCourseCard(cseFiltered);
// });

// const wdd = document.querySelector("#WDD");

// wdd.addEventListener("click", () => {
//     const wddFiltered = courses.filter(course => course.subject === "WDD");
//     createCourseCard(wddFiltered);
// });

const totalCredits = document.querySelector("#filter-credits");
const allButton = document.querySelector("#all");
const wddButton = document.querySelector("#WDD");
const cseButton = document.querySelector("#CSE");

createCourseCard(courses);

const creditsFiltered = courses.reduce((runningTotal, course) => {
    return runningTotal + course.credits;
}, 0);

totalCredits.textContent = creditsFiltered;

allButton.addEventListener("click", () => {
    
    const totalAllCredits = courses.reduce((runningTotal, course) => {
        return runningTotal + course.credits;
    }, 0);

    createCourseCard(courses);

    totalCredits.textContent = totalAllCredits;
});


wddButton.addEventListener("click", () => {
    const wddCredits = courses.filter(course => course.subject === "WDD");
    const totalWddCredits = wddCredits.reduce((runningTotal, course) => {
        return runningTotal + course.credits;
    }, 0);

    createCourseCard(wddCredits);

    totalCredits.textContent = totalWddCredits;
});

cseButton.addEventListener("click", () => {
    const cseCredits = courses.filter(course => course.subject === "CSE");
    const totalCseCredits = cseCredits.reduce((runningTotal, course) => {
        return runningTotal + course.credits;
    }, 0);

    createCourseCard(cseCredits);

    totalCredits.textContent = totalCseCredits;
});
 


