var grades = new Object();
grades.vak = "JavaScript";
grades.klas = "GDE19";
grades.blok = 2;
grades.cijfers = [9, 10, 8];


function testGrades(vak1, klas1, blok1, cijfers1) {
    this.vak = vak1;
    this.klas = klas1;
    this.blok = blok1;
    this.cijfers = cijfers1;
}