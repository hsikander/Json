



var teacher = { 
    "student" :
    
    [
    {
        "name" : "hammad",
        "id" : "007",
        "email" : "hammad.sikander2@gmail.com",
    },
    {
        "name" : "haris",
        "id" : "008",
        "email" : "haris.sikander2@gmail.com",
    },
    {
        "name" : "khan",
        "id" : "009",
        "email" : "khan.sikander2@gmail.com",
    },{
        "name" : "haris",
        "id" : "008",
        "email" : "haris.sikander2@gmail.com",
    },
    {
        "name" : "haris",
        "id" : "008",
        "email" : "haris.sikander2@gmail.com",
    }
]
}

 var result = teacher.student.length;
// console.log(result);

for(let i = 0; i < result; i++){
    console.log(teacher.student[i].name);    
}