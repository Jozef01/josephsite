function query(params) {
  return document.querySelector(params);
}

formdata = query('#formdata');
email = query('#email');
phone = query('#phone');
msg = query('.msg');
content = query('.b');

//register users
function reqUser() {
  ajax = new XMLHttpRequest();
  formData = new FormData();
  formData.append('username', userInput.value);
  formData.append('email', emailInput.value);
  formData.append('phone', phoneInput.value);
  formData.append('profile', file.files[0]);
  ajax.open('post', "serve/reg.php");
  ajax.onreadystatechange = function(e) {
    if (this.readyState == 4 && this.status == 200) {
      res = JSON.parse(this.response);
      alert(res.error);

    }
  };
  ajax.send(formData);
}

function AddUser() {
  userInput = query('#userInput');
  emailInput = query('#emailInput');
  phoneInput = query('#phoneInput');
  addUserbtn = query('#addUserbtn');
  preview = query('#preview');

  file = query('#files');
  file.addEventListener('change', function() {
    fileurl = URL.createObjectURL(file.files[0]);
    preview.innerHTML = `<img class='rounded-circle' src='${fileurl}' width='100'>`;
  });
  addUserbtn.addEventListener('click', function() {
    if (!userInput.value || !emailInput.value || !phoneInput || file.files.length == 0) {
      alert('All Fields are required');
    } else {
      reqUser();

    }
  });


}

function addUsersPage() {
  ajax = new XMLHttpRequest();
  ajax.open('get', "serve/nav.php?add=user");
  ajax.onreadystatechange = function(e) {
    if (this.readyState == 4 && this.status == 200) {
      res = JSON.parse(this.response);
      bodyc.innerHTML = res.page;
      AddUser();
    }
  };
  ajax.send();
}

function UsersListPage() {
  ajax = new XMLHttpRequest();
  ajax.open('get', "serve/nav.php?list=user");
  ajax.onreadystatechange = function(e) {
    if (this.readyState == 4 && this.status == 200) {
      res = JSON.parse(this.response);
      bodyc.innerHTML = res.page;
      result = res.users;
      console.log(result);

      for (let index = 0; index < result.length; index++) {
        const element = result[index];
        query('#displaylist').innerHTML += `
              <tr>
             <th scope="row">${result[index].id}</th>
             <td>${element.username}</td>
             <td>${element.email}</td>
             <td>${element.phone}</td>
             <td><img width='100' src='./userUploads/${result[index].image}'></td>
             <td><button class='btn btn-danger'>del</button></td>
         </tr>`;
      }
    }
  };
  ajax.send();
}


function dashboard() {
  namearea = query('#username');
  profile = query('#image');
  profile.src = 'img/profile/' + res.userinfo.image;
  namearea.innerText = res.userinfo.username;
  query('.username').innerHTML = res.userinfo.username;
  query('.email').innerHTML = res.userinfo.email;
  query('.image').src = 'img/profile/' + res.userinfo.image;
  query('#phone2').innerHTML = res.userinfo.phone;
  query('.email2').innerHTML = res.userinfo.email;
  query('.gender').innerHTML = res.userinfo.gender;
  var icon = query('#backtohome');

  bodyc = query('#bodychange');
  icon.addEventListener('click', function() {
    bodyc.innerHTML = `<div class="col-xl-4 mb-5">
          <h2 class="small-title">About</h2>
          <div class="card h-100-card">
              <div class="card-body">
                  <div class="d-flex align-items-center flex-column mb-4">
                      <div class="d-flex align-items-center flex-column">
                          <div class="sw-13 position-relative mb-3">
                              <img src="img/profile/profile-1.webp"  class="image" width="100" class="img-fluid rounded-xl" alt="thumb">
                          </div>
                          <div class="h5 mb-0 username">Alicia Owens</div>
                          <div class="text-muted email">Highschool Teacher</div>
                      </div>
                  </div>
                  <div class="mb-5">
                      <p class="text-small text-muted mb-2">CONTACT</p>
                      <div class="row g-0 mb-2">
                          <div class="col-auto">
                              <div class="sw-3 me-1">
                                  <i data-acorn-icon="phone" class="text-primary" data-acorn-size="17"></i>
                              </div>
                          </div>
                          <div class="col text-alternate " id="phone2">+6443884455</div>
                      </div>
                      <div class="row g-0 mb-2">
                          <div class="col-auto">
                              <div class="sw-3 me-1">
                                  <i data-acorn-icon="email" class="text-primary" data-acorn-size="17"></i>
                              </div>
                          </div>
                          <div class="col text-alternate  email2">aliciaowens@gmail.com</div>
                      </div>
                      <div class="row g-0 mb-2">
                          <div class="col-auto">
                              <div class="sw-3 me-1">
                                  <i data-acorn-icon="pin" class="text-primary" data-acorn-size="17"></i>
                              </div>
                          </div>
                          <div class="col text-alternate gender">Wellington New Zealand</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-xl-8">
          <h2 class="small-title">Stats</h2>
          <div class="row gx-2">
              <div class="col-12 p-0">
                  <div class="glide glide-small" id="statsCarousel">
                      <div class="glide__track" data-glide-el="track">
                          <div class="glide__slides">
                              <div class="glide__slide">
                                  <div class="card mb-5 hover-border-primary">
                                      <span class="position-absolute e-3 t-4 z-index-1">
                                          <i data-acorn-icon="check" class="text-primary"
                                              data-acorn-size="14"></i>
                                      </span>
                                      <div
                                          class="h-100 d-flex flex-column justify-content-between card-body align-items-center">
                                          <div
                                              class="sw-8 sh-8 rounded-xl d-flex justify-content-center align-items-center border border-primary">
                                              <i data-acorn-icon="blood" class="text-primary"></i>
                                          </div>
                                          <div class="text-center mb-0 sh-8 d-flex align-items-center lh-1-5">
                                              Blood
                                              <br>
                                              Pressure
                                          </div>
                                          <div class="display-6 text-primary">115/74</div>
                                      </div>
                                  </div>
                              </div>
                              <div class="glide__slide">
                                  <div class="card mb-5 hover-border-primary">
                                      <span class="position-absolute e-3 t-4 z-index-1">
                                          <i data-acorn-icon="check" class="text-primary"
                                              data-acorn-size="14"></i>
                                      </span>
                                      <div
                                          class="h-100 d-flex flex-column justify-content-between card-body align-items-center">
                                          <div
                                              class="sw-8 sh-8 rounded-xl d-flex justify-content-center align-items-center border border-primary">
                                              <i data-acorn-icon="heart" class="text-primary"></i>
                                          </div>
                                          <div class="text-center mb-0 sh-8 d-flex align-items-center lh-1-5">
                                              Heart
                                              <br>
                                              Rate
                                          </div>
                                          <div class="display-6 text-primary">93</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>`;
  });
  query('#add').addEventListener('click', function(params) {
    addUsersPage();
  });

  query('#list').addEventListener('click', function(params) {
    UsersListPage();
  });



}

formdata.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(email.value);
  ajax = new XMLHttpRequest();
  formData = new FormData();
  formData.append('email', email.value);
  formData.append('phone', phone.value);
  ajax.open('post', "serve/server.php");
  ajax.onreadystatechange = function(e) {
    if (this.readyState == 4 && this.status == 200) {
      res = JSON.parse(this.response);
      if (res == 'empty') {
        msg.innerHTML = `<div class="alert alert-danger">Fields are required</div>`;
      } else if (res == "invalid") {
        msg.innerHTML = `<div class="alert alert-danger">Invalid creds</div>`;
      } else {

        content.innerHTML = res.page;
        dashboard();

      }
    }
  };
  ajax.send(formData);
});