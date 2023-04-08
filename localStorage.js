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
            localStorage.setItem('name',name.value);
            localStorage.setItem('email',email.value);
        }
    }

</script>
</html>
