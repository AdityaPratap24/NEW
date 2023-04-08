<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>JS For Beginners</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1>JS For Beginners</h1>
    </header>

    <section class="container">
      <form id="my-form">
        <h1>Add User</h1>
        <div class="msg"></div>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email">
        </div>
        <input id="btn" type="submit" value="Submit">
      </form>

    </section>
  </body>
  <script defer>
    const sub = document.querySelector('#my-form');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');

    sub.addEventListener('submit',submitData);

    function submitData(e) {
        e.preventDefault();
        if(name.value === '' || email.value === ''){
            alert('Enter the details');
        }
        else{
            let myObj = {
                naam : name.value,
                mail : email.value
            }
            // localStorage.clear();
            let myObj_stringify = JSON.stringify(myObj);
            localStorage.setItem('myObj',myObj_stringify);

            var li = document.createElement('li');
            const text = JSON.parse(localStorage.getItem('myObj'));
            li.appendChild(document.createTextNode(text.naam + " " + text.mail));
            sub.appendChild(li);

            let item = JSON.parse(localStorage.getItem('myObj'));
            console.log(item);
        }
    }

</script>
</html>
