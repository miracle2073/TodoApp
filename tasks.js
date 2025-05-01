document.addEventListener('DOMContentLoaded', () =>{

    const submit = document.querySelector('#submit');
    const input = document.querySelector('#name');

    submit.disabled = true;

    input.onkeyup = () =>{

        if(input.value.length > 0){
            submit.disabled = false;
        }
        else{
            submit.disabled = true;
        }
    };


    document.querySelector('form').onsubmit = () => {

        const task = input.value;

        const li = document.createElement('li');
        li.innerHTML = task;

        document.querySelector('#tasks').append(li);

        input.value='';

        submit.disabled = true;

        return false;
      
    }
 });