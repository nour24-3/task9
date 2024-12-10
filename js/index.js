
let siteNameInput = document.getElementById("siteName");
let urlLinkInput = document.getElementById("url");
let bookmarkList = [];


if(localStorage.getItem("bookmarkContainer") !== null){
    bookmarkList = JSON.parse(localStorage.getItem("bookmarkContainer"));
    displayData();
    
}



function addBookmark(){
let bookmark = {
    Name : siteNameInput.value,
    url : urlLinkInput.value,
};
    
    bookmarkList.push(bookmark);
    localStorage.setItem("bookmarkContainer" , JSON.stringify(bookmarkList));
    displayData();
    console.log(bookmarkList);
    clearForm();

}

console.log("aloo")
function clearForm(){
    siteNameInput.value = null;
    urlLinkInput.value = null;
}


function deleteItem(index){
    bookmarkList.splice( index , 1  );
    localStorage.setItem("bookmarkContainer" , JSON.stringify(bookmarkList));
    displayData();
}

function displayData(){
    let cartona =""
    for(let i = 0 ; i < bookmarkList.length ; i++){

        cartona +=`
            <tr>
                <th scope="row">${[i+1]}</th>
                <td>${bookmarkList[i].Name}</td>
                <td><button type="button" class="btn btn-success "><a href="${bookmarkList[i].url}"target="_blank"><span><i class="fa-solid fa-eye"></i></span>  View</a></button></td>
                <td><button onclick="deleteItem(${i})" type="button" class="btn btn-danger"><span><i class="fa-solid fa-trash"></i></span> Delete</button></td>
            </tr>
                
        `
    }

    document.getElementById("tData").innerHTML = cartona;
}