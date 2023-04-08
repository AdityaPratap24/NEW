<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
      integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
      crossorigin="anonymous"
    />
    <title>Document</title>
  </head>
  <body>
    <header id="main-header" class="bg-success text-white p-4 mb-3">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1 id="header-title">Item Lister</h1>
          </div>
          <div class="col-md-6 align-self-center">
            <input
              type="text"
              class="form-control"
              id="filter"
              placeholder="Search Items..."
            />
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div id="main" class="card card-body">
        <h2 class="title">Add Items</h2>
        <form id="addForm" class="form-inline mb-3">
          <input type="text" class="form-control mr-2" id="item" />
          <input type="submit" class="btn btn-dark" value="Submit" />
        </form>
        <h2 class="title">Items</h2>
        <ul id="items" class="list-group">
          <li class="list-group-item">
            Item 1
            <button class="btn btn-danger btn-sm float-right delete">X</button>
          </li>
          <li class="list-group-item">
            Item 2
            <button class="btn btn-danger btn-sm float-right delete">X</button>
          </li>
          <li class="list-group-item">
            Item 3
            <button class="btn btn-danger btn-sm float-right delete">X</button>
          </li>
          <li class="list-group-item">
            Item 4
            <button class="btn btn-danger btn-sm float-right delete">X</button>
          </li>
        </ul>
      </div>
    </div>
  </body>
  <script defer>
    var form = document.getElementById("addForm");
    var list_item = document.getElementById("items");
    var filter = document.getElementById('filter');

    form.addEventListener("submit", addLi);
    list_item.addEventListener('click',removeItem);
    filter.addEventListener('keyup',filerElement);

    // add element
    function addLi(e) {
      e.preventDefault();
      const li = document.createElement("li");
      li.className = "list-group-item";
      const text = document.getElementById("item").value;
      li.appendChild(document.createTextNode(text));
      list_item.appendChild(li);

      const button = document.createElement('button');
      button.className = 'btn btn-danger btn-sm float-right delete';
      button.appendChild(document.createTextNode('X'));
      li.appendChild(button);
    }

    // remove element
    function removeItem(e){
        if(e.target.classList.contains('delete')){
            var parentEle = e.target.parentElement;
            list_item.removeChild(parentEle);
        }
    }

    // filter element
    function filerElement(e){
        var text = e.target.value.toLowerCase();
        var items = list_item.getElementsByTagName('li');
        
        Array.from(items).forEach(function(item){
            var itemName = item.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(text) != -1){
                item.style.display = 'block';
            }
            else{
                item.style.display = 'none';
            }
        })

        console.log(text);
    }

  </script>
</html>
