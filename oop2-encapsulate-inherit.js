/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  
    Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  
    Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 

    //your code here...
*/

    class Book {
        #author = "";
        #publisher = "";
        constructor(author, publisher) {
            this.author = author;
            this.publisher = publisher;
        }

        get #authorName() {
            return `${author}`;
        }

        get #publisherTitle() {
            return `${publisher}`;
        }

        set #newAuthorName(author) {
            this.#author = author;
        }

        set #newPublisher(publisher) {
            this.#publisher = publisher
        }
    }

    class Author {
        #name = "";
        #books = 0;
        constructor(name, books) {
            this.name = name;
            this.books = books;
        }

        get #name() {
            return `${name}`;
        }

        get #numBooks() {
            return `${books}`;
        }

        set #newName(name) {
            this.#name = name;
        }

        set #bookNum(books) {
            this.#books++;
        }
    }

    class Publisher {
        #author = "";
        #books = 0;
        constructor(authors, books) {
            this.authors = authors;
            this.books = books;
        }

        get #authorsName() {
            return `${authors}`;
        }

        get #numBooks() {
            return `${books}`;
        }

        set #newAuthor(authors) {
            this.#authors = authors;
        }

        set #bookNum(books) {
            this.#books++;
        }
    }

    class Review {
        #rating = 0;
        #books = 0;
        constructor(rating, books) {
            this.rating = rating;
            this.books = books;
        }

        get #currentRating() {
            return `${rating}`;
        }

        get #numBooks() {
            return `${books}`;
        }

        set #newRating() {
            this.#rating = rating;
        }

        set #incBookAmount() {
            this.#books++;
        }
    }



/*2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties.
     Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing. */

    class Umbrella {
        constructor(orgName, orgHQ, orgCopyright) {
            this.orgName = orgName;
            this.orgHQ = "";
            this.orgCopyright = 0;
        }

        set currentCopyright(orgCopyright) {
            this.orgCopyright = orgCopyright;
        }

        set orgHQLocation(orgHQ) {
            this.orgHQ = orgHQ;
        }
    }

    class Company extends Umbrella {
        constructor(compName, numEmployees, currentRevenue, stockAmount) {
            this.compName = compName;
            this.numEmployees = 0;
            this.currentRevenue = currentRevenue;
            this.stockAmount = 0;
        }

        set employeeCount(numEmployees) {
            this.numEmployees = numEmployees;
        }

        set generateStock(stockAmount) {
            this.stockAmount = stockAmount;
        }
    }

    class Site extends Company {
        constructor(siteName, siteLocation, employeeCount, currentRevenue) {
            super(compName);
            this.siteName = siteName;
            this.siteLocation = siteLocation;
            this.employeeCount = employeeCount;
            this.currentRevenue = currentRevenue;
        }

        get location(siteLocation){
            return `${siteLocation}`;
        }

        get revenue(currentRevenue){
            return `${currentRevenue}`;
        }
    }

    class Employee {
        constructor(employeeName, jobTitle, salary, workHours, vacationDays) {
            this.employeeName = employeeName;
            this.jobTitle = jobTitle;
            this.salary = salary;
            this.workHours = 0;
            this.vacationDays = 0;
        }

        set currentWorkHours(workHours) {
            this.workHours = workHours;
        }

        set vacationDayAmount(vacationDays) {
            this.vacationDays = vacationDays;
        }
    }

    let EA = new Umbrella("EA", "Redwood City", 1982);
    let biowareAustin = new Company("Bioware Austin", 1000, 1800000000, 15000);
    let diceLA = new Company("Dice LA", 900, 15000000, 120000);
    let maxisStudios = new Company("Maxis Studios", 850, 12300000, 120000);
    let eaMontreal = new Site("EA Montreal", "Montreal", 600, 1200030);
    let eaBatonRouge = new Site("EA Baton Rogue", "Baton Rouge", 750, 125400);
    let eaVancouver = new Site("EA Vancouver", "Vancouver", 950, 124500);
    let andrewWilson = new Employee("Andrew Wilson", "CEO", 125000, 40, 25);
    let martinScott = new Employee("Martin Scott", "General Manager", 85000, 45, 18);
    let haroldSmith = new Employee("Harold Smith", "Secretary", 65000, 40, 12);
    let maryThomas = new Employee("Mary Thomas", "Engineer", 75000, 45, 15);
    let emilyBrown = new Employee("Emily Brown", "Engineer", 75000, 45, 15);
    let ronaldFlores = new Employee("Ronald Flores", "Financial Officer", 90000, 45, 20);
    let dannyAnton = new Employee("Danny Anton", "Marketer", 70000, 40, 14);
    let arnoldLewis = new Employee("Arnold Lewis", "Janitor", 25000, 30, 8);
    let donCarmichael = new Employee("Don Carmichael", "HR Personell", 65000, 40, 13);
    let rachelCruz = new Employee("Rachel Cruz", "Lawyer", 125000, 40, 15);

    //your code here...




/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...