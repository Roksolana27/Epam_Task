(function () {
    var students = [{
            name: 'Liudmyla'
            , lastName: 'Bashta'
            , img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg'
            , coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg'
            , email: 'liudmyla.bashta@gmail.com'
            , skills: ['Javascript', 'HTML', 'CSS']
        }
        , {
            name: 'Roman'
            , lastName: 'Chapkailo'
            , img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg'
            , coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg'
            , email: 'romafromukraine@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Khrystyna'
            , lastName: 'Dalivska'
            , img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg'
            , coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg'
            , email: 'khrystynadalivska@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Ivan'
            , lastName: 'Gnatyshyn'
            , img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg'
            , coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg'
            , email: 'gnatyshyn.ivan@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Andrii'
            , lastName: "Hun'ka"
            , img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg'
            , coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg'
            , email: 'andriyggg@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Maksym'
            , lastName: 'Izmailov'
            , img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg'
            , coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg'
            , email: 'maksym.izmailov.lv@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Taras'
            , lastName: 'Kharkhalis'
            , img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg'
            , coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg'
            , email: 'taraskharkhalis97@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Khrystia'
            , lastName: 'Kondratovych'
            , img: 'https://www.webdesign.org/img_articles/21726/17.jpg'
            , coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg'
            , email: 'khrustyk@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Iuliia'
            , lastName: 'Kurylo'
            , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw'
            , coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA'
            , email: 'iulia.kurylo@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Roman'
            , lastName: 'Mandziuk'
            , img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'
            , coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg'
            , email: 'rmandzyuk94@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Oleh'
            , lastName: 'Marko'
            , img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header'
            , coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg'
            , email: 'olehmarko@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Anatoliy'
            , lastName: 'Mazur'
            , img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg'
            , coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg'
            , email: 'mail4tolik@gmail.com'
            , skills: ['JavaScript', 'CSS', 'HTML']
        }
        , {
            name: 'Vitaliy'
            , lastName: 'Palyushok'
            , img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png'
            , coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg'
            , email: 'xskeletons@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Stepan'
            , lastName: 'Prokopiak'
            , img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg'
            , coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg'
            , email: 'sprokopyak96@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Stepan'
            , lastName: 'Sendun'
            , img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg'
            , coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg'
            , email: 'steve.neeson21@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Andrii'
            , lastName: 'Soroka'
            , img: ''
            , coverImg: ''
            , email: 'email@example.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Illya'
            , lastName: 'Syniuk'
            , img: 'https://www.facebook.com/photo.php?fbid=578754465640942&set=a.317602991756092.1073741826.100005191805447&type=3&theater'
            , coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater'
            , email: 'illyasynuik@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Andrew'
            , lastName: 'Tantsiura'
            , img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg'
            , coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg'
            , email: 'andrii.tans@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Liliya'
            , lastName: 'Tserkovna'
            , img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B'
            , coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4'
            , email: 'lilichkaTserkovna@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
        , {
            name: 'Anton'
            , lastName: 'Zhygalov'
            , img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg'
            , coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg'
            , email: 'antonzhygalov@gmail.com'
            , skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];
    
    
    //Create table and insert students data into it using switch case
    function DrawTable() {
        // get the reference for the table-section
        var container = document.getElementById("table-section");
        //remove all dom elements from table-section 
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        
        // creates a <table> element and a <thead> with <tbody> elements
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover");
        var tBody = document.createElement("tbody");
        var thead = document.createElement("thead");
        
        //create first row with title
        var th = "<th>Students </th><th>Email</th><th>Skills</th><th>Photo</th><th>Controls</th>";
        var row = document.createElement("tr");
        row.innerHTML = th;
        thead.appendChild(row);
        table.appendChild(thead);
        
        
        // creating all cells
        for (var j = 0; j < students.length; j++) {
            // creates a table row
            var row = document.createElement("tr");
            for (var i = 0; i < 5; i++) {
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
                var cell = document.createElement("td");
                switch (i) {
                case 0:
                    var cellText = students[j].name + " " + students[j].lastName;
                    break;
                case 1:
                    var cellText = students[j].email;
                    break;
                case 2:
                    var cellText = students[j].skills;
                    break;
                case 3:
                    var cellText = "<img src = '" + students[j].coverImg + "'>";
                    break;
                case 4:
                    var cellText = "<button class='edit-btn glyphicon glyphicon-edit'> Edit</button><button class='remove-btn glyphicon glyphicon-trash'> Remove</button>";
                }
                cell.innerHTML = cellText;
                row.appendChild(cell);
            }
            // add the row to the end of the table body
            tBody.appendChild(row);
        }
        
        // put the <tbody> in the <table>
        table.appendChild(tBody);
        
        // appends <table> into <body>
        container.appendChild(table);
        //add sort button to the first cell
        var studentCell = document.getElementsByTagName('th')[0];
        var glyphSort = document.createElement("a");
        var span = document.createElement("span");
        glyphSort.setAttribute("href", "#");
        span.className += " sort-btn glyphicon";
        glyphSort.appendChild(span);
        studentCell.appendChild(glyphSort);
    }
    
    
    var toggle = true;
    var sortClass = " glyphicon-sort";
    
    function addEventListeners(){
        
        //When the user clicks the button it calls the sorting function, and pass params to sort a-z(-1, 1) or z-a(1, -1)
        var sortBtn =  document.querySelector(".sort-btn");
        sortBtn.className += sortClass;
        sortBtn.addEventListener('click', function(event){
            event.stopPropagation();
            if(toggle){
                toggle = false;
                sortClass = " glyphicon-sort-by-alphabet";
                sorting(-1, 1);
            }else{
                toggle = true;
                sortClass = " glyphicon-sort-by-alphabet-alt";
                sorting(1, -1);
            }
        });
        
        
        var tbody = document.getElementsByTagName("tbody")[0];
        var form = document.getElementById('user-form');
        var person;
        var currentStudent = {};
        
        //when the user clicks on row, edit or remove button
        tbody.addEventListener('click', function(event){
            //when the user clicks on row, modal window with student is triggered
            if(event.target.nodeName === "TD"){ 
                person = event.target.parentElement.childNodes[1].innerHTML;
                //find current student in array
                var obj = students.find(findStudent);

                var txt = "<div><img src='" + obj.img + "'></div><div><p>Name: " + obj.name + " " + obj.lastName + "</p><p>Email: " + obj.email + "</p><p>Skills: " + obj.skills + "</p></div>";
                var content = document.querySelector("#content");
                content.innerHTML = txt;
                modal.style.display = "block";
            }
            //when the user clicks on remove button, target row is removed and student is deleted from object
            if(event.target.className == "remove-btn glyphicon glyphicon-trash"){
                var row = event.target.parentNode.parentNode;
                person = row.childNodes[1].innerHTML;
                var data = students.filter(function(user) {
                    return user.email !== person;
                });
                row.parentNode.removeChild(row);
                students = data;
            }
            //When the user clicks on edit button the form filled in with student’s data
            if(event.target.className == "edit-btn glyphicon glyphicon-edit"){
                var row = event.target.parentNode.parentNode;
                person = row.childNodes[1].innerHTML;
                
                currentStudent = students.find(findStudent);
                form.elements.namedItem("uname").value = currentStudent.name;
                form.elements.namedItem("sname").value = currentStudent.lastName;
                form.elements.namedItem("uemail").value = currentStudent.email;
                form.elements.namedItem("uskills").value = currentStudent.skills;
                form.elements.namedItem("uphoto").value = currentStudent.coverImg;
                
                //after click edit button scroll page to input form
                window.scrollTo(0, 0);

            }
            
        })
        
        
        //Search current student in array of students
        function findStudent(user){
            return user.email === person;
        }
        
        //save student in the table and array
        var save = document.getElementById('saveBtn');
        save.addEventListener('click', function (){
            //get new updated student from form
            var student = {
                name: form.elements.namedItem("uname").value,
                lastName: form.elements.namedItem("sname").value,
                email: form.elements.namedItem("uemail").value,
                skills: form.elements.namedItem("uskills").value,
                coverImg: form.elements.namedItem("uphoto").value
            };
            
            if(validateForm(student)){
                //searching current student in the rows of students by email and then update it
                var cell = document.getElementsByTagName('tr');
                for(var i = 1; i < cell.length; i++){
                    if(cell[i].childNodes[1].innerHTML == currentStudent.email){
                        cell[i].childNodes[0].innerHTML = student.name + " " + student.lastName;
                        cell[i].childNodes[1].innerHTML = student.email;
                        cell[i].childNodes[2].innerHTML = student.skills;
                        cell[i].childNodes[3].innerHTML = '<img src="' + student.coverImg + '">';
                        break;
                    }
                
                }
                //search current student in array of students and replace it with new one
                var studExist = false;
                var updateArray = students.map(function(obj) { 
                    if(obj.email == currentStudent.email){
                        obj = student;
                        studExist = true;
                    }
                    return obj;
                });
            
                if(studExist){
                   students = updateArray; 
                }
                else{
                    students.push(student);
                    DrawTable();
                    addEventListeners();
                }
                 console.log(students);
            }
            else{
                console.log("Data Error");
            }
            
        });
        
        //When the user clicks the cancel button the form become empty.
        var cancel = document.getElementById('cancelBtn');
        cancel.addEventListener('click', function(){
            currentStudent = {};
            form.reset();
        });
        
        
    }
    
    //Validate all input fields.
    function validateForm(student) {
        var bool;
        var urlRegExp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        var mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if (student.name != "" 
            && student.lastName != ""
            && urlRegExp.test(student.coverImg) 
            && student.skills != "" 
            && mailRegExp.test(student.email)) {
            
            bool = true;
        }
        else{
            alert("All fields must be filled out properly!");
            bool = false;
        }
        return bool;
    }
    
    
    //sort students name by a->z and z->a order
    function sorting(x,y){
        students.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return x;
        }
        if (nameA > nameB) {
            return y;
        }
        // names must be equal
        return 0;
        });
        
        //After items are sorted they redraw in table
        DrawTable();
        addEventListeners();
    }
    
    DrawTable();
    addEventListeners();
    
    
    var modal = document.getElementById('myModal');
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
            modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
})();