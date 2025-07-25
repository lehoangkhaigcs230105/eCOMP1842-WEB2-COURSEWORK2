<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/words" exact class="item">
            <i class="comment outline icon"></i> Words
          </router-link>
          <router-link to="/words/new" class="item">
            <i class="plus circle icon"></i> New
          </router-link>
          <router-link to="/test" class="item">
            <i class="graduation cap icon"></i> Test
          </router-link>
        </div>
      </div>
    </div>

    <div class="ui text container">
      <flash-message class="myFlash"></flash-message>
      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
/* Active navigation styling */
/* .item.router-link-exact-active.active {
  background-color: gold !important;
  color: white !important;
  font-weight: bold;
  border-radius: 5px;
  
} */
 div.ui.secondary.pointing.menu a.item:hover {
  background-color: pink;
}

div.ui.secondary.inverted.menu .active.item{
  color: green !important;
  background-color: gold !important;
  font-weight: bold;
  border-radius: 5px;
  
}

/* Navigation bar */
#app .navbar {
  margin-bottom: 2em;
  background: linear-gradient(90deg, #C0C0C0 50%, #21cbf3 100%);
  padding: 1em;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Flash message box */
.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50px;
  right: 0;
}
/* Inputs and labels */
input {
  width: 100%;
  padding: 0.75em;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1em;
}

label {
  width: auto;
  display: block;
  font-weight: bold;
  margin-bottom: 0.5em;
  color: #333;
}

/* List items */
div .item {
  margin-bottom: 12px;
  padding: 1em;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

div .item:hover {
  background-color: #f9f9f9;
}

/* Buttons */
button.ui.button {
  max-width: 180px;
  margin-top: 1em;
  background-color: #2196f3;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button.ui.button:hover {
  background-color: #1976d2;
  color: #fff;
}

/* Custom menu style */
.ui.large.secondary.inverted.pointing.menu.compact {
  background-color: #03a9f4 !important;
  border-radius: 8px;
  padding: 1em;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.ui.menu .item {
  color: white !important;
  font-weight: 500;
  font-size: 1.1em;
}

</style>

