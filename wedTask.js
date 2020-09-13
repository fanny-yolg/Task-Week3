class Student {
    constructor (name, age, dob, gender, id, hobbies) {
        this._name = name;
        this._age = age;
        this._dateOfBirth = dob;
        this._gender = gender;
        this._studentId = id;
        this._hobbies = hobbies;
    }
    get name(){
        return this._name;
    }
    set setName(name){
        this._name = name;
    }
    get age(){
        return this._age;
    }
    set setAge(age){
        this._age = age;
    }
    get dob(){
        return this._dateOfBirth;
    }
    set setDob(dob){
        this._dateOfBirth = dob;
    }
    get gender(){
        return this._gender;
        // if (this.gender === 'Male' || 'Female'){
        //     return this._gender;
        // } else {
        //     return 'Choose the right gender'
        // }
    }
    set setGender(gender){
        this._gender = gender;
    }
    get id(){
        return this._studentId;
    }
    set setId(id){
        this._studentId = id;
    };
    get hobbies(){
        return this._hobbies
    }
    set setHobbies(hobbies){
        this._hobbies = hobbies;
    };
};

const fanny = new Student('Fanny', 21, '3 Juni 1999', 'Female', '0072020017', 'Traveling');
fanny.setName = 'Danny';
fanny.setGender = 'male'
fanny.setAge = 10;
fanny.setId = "djfhak";
console.log(fanny.name)
console.log(fanny.age);
console.log(fanny.gender);
console.log(fanny.id);
