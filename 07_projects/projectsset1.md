# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("raj")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id == 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'white'){
      body.style.backgroundColor = e.target.id
    }    
    if(e.target.id == 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'purple'){
      body.style.backgroundColor = e.target.id
    }
  });
});

```

## project 2 solution

```javascript
const form = document.querySelector('form');
//this usecase will give u empty
// const height parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    const BMI = (weight/((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML = `<span style="margin-left: 35px;">${BMI}</span>`;
    // results.style.marginLeft = "50px"
    if(BMI<18.6){
      const msg = document.createElement('p');
      msg.textContent = "UNDERWEIGHT";
      msg.style.color = "BLUE";
      msg.style.fontSize = "25px"
      results.appendChild(msg);
    }
  }
});


```