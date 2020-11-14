const userProfileTemplate = (

    '<div id="user" class="grey lighten-3">' +

                '<div class="user--data">' +
                    '<div class="user--data__profileInfo">'+ 
                            '<img src="./assets/head-659651_1920.png" class="avatar">'+
                            '<p class="username--container">user: <span style="font-weight: 600;" id="username">%username%</span></p>'+
                   '</div>'+

                   ' <div class="user--data__profileStats">'+ 
                        '<div class="profileStates--container">'+
                            '<p style="display: inline-block; margin-bottom: 0.5rem;">Best Score: <span id="best-score"  style="font-weight: 600;">%score%</span></p>'+
                            '<p class="bestToBeat-score_container" style="display: inline-block; margin-bottom: 0.5rem;">Best to Beat: <span id="bestToBeat-score"  style="font-weight: 600;"></span></p>'+
                            '<a id="btn-logout" class="waves-effect waves-light btn red darken-1">LogOut</a>'+
                       '</div>'+
                   ' </div>' +
               ' </div>'+

                '<div class="user--options">' +  
                    '<div class="user--options__container">'+
                        '<div class="game--types">'+
                           ' <h4>Choose game type:</h4>'+
                           ' <p id="game--info" style="color: #eee;">Choose your favourite category and set new Best to Beat result!</p>'+
                            '<form>'+
                                '<div class="inputGroup">'+                           
                                   ' <input id="gameTheme-radio" name="radio" type="radio" checked onclick="checkRadios()"/>'+
                                    '<label for="gameTheme-radio">Multiple category game quiz</label>'+
                               ' </div>'+
                                    '<select id="gamecategory">'+
                                   ' <option value = "9" selected>Any Category</option>'+
                                    '<option value = "10">General Knowledge</option>'+
                                    '<option value = "11">Entertainment: Books</option>'+
                                    '<option value = "12">Entertainment: Film</option>'+
                                    '<option value = "13">Entertainment: Music</option>'+
                                    // '<option value = "14">Entertainment: Musicals & Theatres</option>'+
                                    '<option value = "15">Entertainment: Television</option>'+
                                    '<option value = "16">Entertainment: Video Games</option>'+
                                    '<option value = "17">Entertainment: Board Games</option>'+
                                    '<option value = "18">Science and Nature</option>'+
                                    '<option value = "19">Science: Computers</option>'+
                                    // '<option value = "20">Science: Mathematics</option>'+
                                    // '<option value = "21">Mythology</option>'+
                                    '<option value = "22">Sports</option>'+
                                    '<option value = "23">Geography</option>'+
                                    '<option value = "24">History</option>'+
                                    // '<option value = "25">Politics</option>'+
                                    // '<option value = "26">Art</option>'+
                                    // '<option value = "27">Celebrities</option>'+
                                    '<option value = "28">Animals</option>'+
                                    '<option value = "29">Vehicles</option>'+
                                    // '<option value = "30">Entertainment: Comics</option>'+
                                    // '<option value = "31">Entertainment: Japanese Anime & Manga</option>'+
                                    '<option value = "32">Entertainment: Cartoon & Animations</option>'+
                                    '</select>'+
                                '<div class="inputGroup">'+
                                    '<input id="quick-radio" name="radio" type="radio" onclick="checkRadios()"/>'+
                                    '<label for="quick-radio">Millionaire</label>'+
                               ' </div>'+
                            '</form>'+
                            '<button id="btn--play" class="waves-effect waves-light btn blue accent-3">PLAY!</button>'+
                        '</div>'+
                   ' </div>'+
               ' </div>'+

           ' </div>'

);

const modals = (
            '<div class="modals">'+

                '<a data-target="modal-login" id="btn--modalLogin" class="waves-effect waves-light btn btn-large blue lighten-2 modal-trigger">LogIn</a>'+
                '<a data-target="modal-signup" class="waves-effect waves-light btn btn-large red lighten-1 modal-trigger">SignUp</a>'+

                '<div id="modal-login" class="modal">'+
                   ' <div class="modal-content">'+
                        '<i class="large material-icons">perm_identity</i>'+
                        '<form id="login-form">'+
                            '<div class="input-field">'+
                                '<input  id="emailLogin" type="email" class="validate" required>'+
                                '<label class="active" for="username" style="display: inline-block;">Email</label>'+
                            '</div>'+
                            '<div class="input-field">'+
                                '<input  id="passwordLogin" type="password" class="validate" required>'+
                                '<label class="active" for="password"style="display: inline-block;">Password</label>'+
                           ' </div> ' +
                            '<div class="modal-footer">'+
                                '<a data-target="modal-changePass" class="btn-forgotPass modal-close waves-effect waves-green btn-flat modal-trigger">Forgot password?</a>'+
                                '<button id="btn-login" class="btn btn-large waves-effect waves-light green lighten-1">login</button>'   +
                            '</div>'+
                        '</form>'+
                    '</div>'+
                '</div>'+

                '<div id="modal-changePass" class="modal">'+
                   '<div class="modal-content">'+
                        '<p>Reset password using your e-mail</p>'+
                    '<input class="validate" type="email" id="email-forReset" required>'+
                    '<a class="btn btn-medium waves-effect waves-light green lighten-2 modal-close" id="btn-submitEmail">Submit</a>'+
                    '</div>'+
               '</div>'+

                '<div id="modal-signup" class="modal">'+
                    '<div class="modal-content">'+
                        '<i class="large material-icons">person_add</i>'+
                       ' <form id="signup-form">'+
                            '<div class="input-field">'+
                                '<input  id="usernameSignup" type="text" class="validate" required>'+
                                '<label class="active" for="username" style="display: inline-block;">Username</label>'+
                            '</div>'+
                            '<div class="input-field">'+
                                '<input  id="emailSignup" type="email" class="validate" required>'+
                                '<label class="active" for="Email"style="display: inline-block;">Email</label>'+
                            '</div>'+
                            '<div class="input-field">'+
                                '<input  id="passwordSignup" type="password" class="validate" required>'+
                                '<label class="active" for="password"style="display: inline-block;">Password</label>'+
                            '</div>'  +
                           ' <button id="btn-signup" class="btn btn-large waves-effect waves-light green lighten-1">Signup</button>'   + 
                        '</form>'+
                    '</div>'+
                '</div>'+
            '</div>'
)

const themeGame = (

    '<div id="themeGame"  class="grey lighten-3">'+
                    '<div class="game--container">'+
                    '<div id="modal--stats" class="modal">'+
                        '<div class="modal--stats__content">'+
                            '<p>Current score: <span class="current--score">0</span></p>'+
                            '<p>Personal best: <span class="personalbest--score">0</span></p>'+
                            '<p>Best to Beat: <span class="best--score"></span></p>'+
                        '</div>'+
                        '<button class="waves-effect waves-light btn btn-small btn-exit modal-close">Exit</button>'+
                    '</div>'+
                    '<div id="modal-confirmation" class="modal">'+
                       ' <p>Are you sure you want to Quit?</p>'+
                        '<button class="waves-effect waves-light btn btn-large btn-yes red lighten-1 modal-close">Yes!</button>'+
                        '<button class="waves-effect waves-light btn btn-large btn-no green darken-2 modal-close">No!</button>'+
                   ' </div>'+
                    '<div class="correct--answers__display"></div>'+
                    '<div class="incorrect--answers__display"></div>'+
                        '<div class="themeGame--description">'+
                        '<p class="category"></p>'+
                        '<p class="difficulty"></p>'+
                        '<p class="timer"></p>'+
                            '<button id="btn--quitThemeGame" class="waves-effect waves-light btn btn-medium red lighten-1">QUIT!</button>'+
                       ' </div>'+
                        '<div class="themeGame--questions__wrapper">'+
                            '<h4 class="themeGame--question">Question</h4>'+
                            '<div class="themeGame--questions__answers">'+
                                '<div class="question--answer ans1">'+
                                    '%Ans1%'+
                                '</div>'+
                                '<div class="question--answer ans2">'+
                                    '%Ans2%'+
                                '</div>'+
                                '<div class="question--answer ans3">'+
                                    '%Ans3%'+
                               ' </div>'+
                                '<div class="question--answer ans4">'+
                                   ' %Ans3%'+
                               ' </div>'+
                           ' </div>'+
                       ' </div>'+
                   ' </div>'+
               ' </div>'
)

const loader = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';

const millionaireTemplate = (
    '<div id="milioner">'+

     ' <div id="table">'+  

          '<table id="milionerTable">' +
            
              '<tr>'+
             '<th>Level</th>'+
             '<th>Money</th>'+
            ' </tr>'+
            ' <tr>'+
                 '<td id="border1">'+
                     '<div id="questionMark1">&#x2754;</div>'+
                    '<div id="true1">&#x2714;</div>'+
                    '<div id="wrong1">&#x274C;</div>'+
               ' </td>'+
                 '<td id="border">100</td>'+
            ' </tr>'+
             '<tr>'+
               ' <td id="border2">'+
                    '<div id="questionMark2">&#x2754;</div>'+
                    '<div id="true2">&#x2714;</div>'+
                   ' <div id="wrong2">&#x274C;</div>'+
               ' </td>'+
               ' <td id="border">200</td>'+
           ' </tr>'+
            '<tr>'+
                '<td id="border3">'+
                   ' <div id="questionMark3">&#x2754;</div>'+
                    '<div id="true3">&#x2714;</div>'+
                   ' <div id="wrong3">&#x274C;</div>'+
               ' </td>'+
                '<td id="border">500</td>'+
           ' </tr>'+
           ' <tr>'+
               ' <td id="border4">'+
                    '<div id="questionMark4">&#x2754;</div>'+
                    '<div id="true4">&#x2714;</div>'+
                    '<div id="wrong4">&#x274C;</div></td>'+
                '<td id="border">1000</td>'+
           ' </tr>'+
            '<tr>'+
                '<td id="border5">'+
                   ' <div id="questionMark5">&#x2754;</div>'+
                   ' <div id="true5">&#x2714;</div>'+
                    '<div id="wrong5">&#x274C;</div>'+
                '</td>'+
               ' <td id="border">2000</td>'+
           ' </tr>'+
            '<tr>'+
                '<td id="border6">'+
                    '<div id="questionMark6">&#x2754;</div>'+
                    '<div id="true6">&#x2714;</div>'+
                    '<div id="wrong6">&#x274C;</div>'+
                '</td>'+
                '<td id="border">5000</td>'+
           ' </tr>'+
            '<tr>'+
               ' <td id="border7">'+
                    '<div id="questionMark7">&#x2754;</div>'+
                    '<div id="true7">&#x2714;</div>'+
                    '<div id="wrong7">&#x274C;</div>'+
                '</td>'+
                '<td id="border">10000</td>'+
           ' </tr>'+
            '<tr>'+
                '<td id="border8">'+
                   ' <div id="questionMark8">&#x2754;</div>'+
                    '<div id="true8">&#x2714;</div>'+
                    '<div id="wrong8">&#x274C;</div>'+
                '</td>'+
                '<td id="border">20000</td>'+
           ' </tr>'+
            '<tr>'+
                '<td id="border9">'+
                    '<div id="questionMark9">&#x2754;</div>'+
                    '<div id="true9">&#x2714;</div>'+
                    '<div id="wrong9">&#x274C;</div>'+
                '</td>'+
                '<td id="border">50000</td>'+
           ' </tr>'+
            '<tr>'+
                '<td id="border10">'+
                    '<div id="questionMark10">&#x2754;</div>'+
                    '<div id="true10">&#x2714;</div>'+
                    '<div id="wrong10">&#x274C;</div>'+
                '</td>'+
                '<td id="border">100000</td>'+
           ' </tr>'+
            '<tr>'+
                '<td id="border11">'+
                    '<div id="questionMark11">&#x2754;</div>'+
                    '<div id="true11">&#x2714;</div>'+
                    '<div id="wrong11">&#x274C;</div>'+
                '</td>'+
                '<td id="border">200000</td>'+
           ' </tr>'+
            '<tr>'+
                '<td id="border12">'+
                    '<div id="questionMark12">&#x2754;</div>'+
                    '<div id="true12">&#x2714;</div>'+
                    '<div id="wrong12">&#x274C;</div>'+
                '</td>'+
                '<td id="border">500000</td>'+
           ' </tr>'+
            '<tr>'+
                '<td id="border13">'+
                    '<div id="questionMark13">&#x2754;</div>'+
                   ' <div id="true13">&#x2714;</div>'+
                    '<div id="wrong13">&#x274C;</div>'+
                '</td>'+
                '<td id="border">1000000</td>'+
           ' </tr>'+
         ' </table> '+

        '<div id="TotalMoney">'+
            '<p id="text">Total Money = 0<p id="money"></p></p>'+
      '  </div>'+

      '</div>'+

      '<div id="mainPart">'+
         '<h1 id="titleM">Millionaire</h1>'+


         '<div id="question">'+
           ' <p></p>'+
        ' </div>'+
         
         '<div id="answers">'+
             '<button id="answerA">'+
            ' </button>'+

             '<button id="answerB">'+

            ' </button>'+

            '<button id="answerC">'+
    
            '</button>'+

            '<button id="answerD">'+

            '</button>'+
         '</div>'+
     '</div>'+

     '<div id="gameOver">'+
    ' <h1>Well done</h1>'+
     '<p>Correct answers :</p>'+
    ' <p>Total money : </p>'+
     '<button id="tryAgain">Try Again</button>'+
     '<button id="quitMilioner">Quit</button>'+
 '</div>'+
 '</div>'
)