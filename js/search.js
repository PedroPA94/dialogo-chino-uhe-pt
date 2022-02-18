const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggestionBox = searchWrapper.querySelector(".autocomplete-box");

inputBox.onkeyup = (e)=>{

    let enteredData = e.target.value;
    let emptyArray = []; // Will store the suggestions

    if (enteredData) {

        for (let i=0; i < uhe.length; i++ ){
        if (uhe[i].name.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").startsWith(enteredData.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) {
            emptyArray.push(uhe[i].name);
        }
        };

        emptyArray = emptyArray.map((data)=>{
        return data = `<li>${data}</li>`;
        });

        searchWrapper.classList.add("show");

        showSuggestions(emptyArray);

        let allList = suggestionBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
        allList[i].setAttribute("onclick", "searchResults(this)");
        }

    } else {
        searchWrapper.classList.remove("show");
    }
};


function showSuggestions(list){
    let listData;
    if(!list.length){
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
    } else {
    listData = list.join('');
    }
    suggestionBox.innerHTML = listData;
};

    