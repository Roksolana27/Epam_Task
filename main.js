var container = document.getElementById("container");
container.innerHTML = '<section><div id="form-section"><form action="#" id="user-form"><input type="text" name="uname" placeholder="First Name" required><input type="text" name="sname" placeholder="Last Name" required><input type="email" name="uemail" placeholder="Email" required><input type="text" name="uskills" placeholder="Skills" required><input type="text" name="uphoto" placeholder="Enter url of your image"><br><input type="button" value="SAVE" id="saveBtn"><input type="button" value="CANCEL" id="cancelBtn"> </form></div></section><section><div id="table-section"></div></section><!-- The Modal --><div id="myModal" class="modal"><!-- Modal content --><div class="modal-content"> <span class="close">&times;</span><div id="content"></div></div></div>';


//function test_() {
//    var xmlHttp = new XMLHttpRequest();
//    xmlHttp.onreadystatechange = function () {
//        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
//            document.getElementById("container").innerHTML = xmlHttp.responseText;
//        }
//    };
//    xmlHttp.open("GET", 'header.html', true); // true for asynchronous
//    xmlHttp.send(null);
//    // 1039
//}
//// Main - run tests
//test_();

