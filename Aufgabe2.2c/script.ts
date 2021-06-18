// 1
interface Student {
    name: string;
    course: string;
    semester: number;
    matriculation: number;
}

// 2
let student1: Student = { name: "Lukas Scheuerle", course: "MIM", semester: 7, matriculation: 257396 };
let student2: Student = { name: "Max Mustermann", course: "OMB", semester: 2, matriculation: 123456 };
let student3: Student = { name: "Laura Musterfrau", course: "MIB", semester: 2, matriculation: 654321 };

// 3 
let studentArray: Student[] = [student1, student2];
studentArray.push(student3);
studentArray.push({ name: "Andreas Reich", course: "MIM", semester: 4, matriculation: 259123 });

console.log(studentArray[0].name);
console.log(studentArray[1].matriculation);
console.log(studentArray[3].semester);

// 4
function showInfo(_s: Student): void {
    console.log(`Name: ${_s.name}, Kurs: ${_s.course} ${_s.semester}, Matrikelnummer: ${_s.matriculation}`);
}

for (let student of studentArray) {
    showInfo(student);
}