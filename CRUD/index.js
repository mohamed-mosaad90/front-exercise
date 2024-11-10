// var preson = {
//     name: "mohamed",
//     test: {
//         run: function () {
//             console.log("run");
//         },
//         walk: function () {
//             return "walk";
//         },
//         skin: "white",

//     }

// }
// var testArr = ["mo", "fayed", "yassin", "mostafa", "ali"]
// // var testArr = [5,10,6,7]
// // var show=testArr.slice(0,2);
// // testArr.sort();
// var show =testArr.lastIndexOf("mo");

// console.log(show);


// for (var i = 0; i <= testArr.length - 1; i++) {
//     console.log(testArr[i]);


// }
//////////////////////////////////////////////////////////
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var BtnChange = document.getElementById("BtnChange");
var currentIndex;


if (localStorage.getItem("productStorage")) {
    productsContainer = JSON.parse(localStorage.getItem("productStorage"))
    console.log("data is exist==>", productsContainer);
    displayData();

}
else {
    var productsContainer = [];
    console.log('no data exist');
}

function addProduct() {
    if (checkInputs() == true) {
        var products = {
            name: productName.value,
            price: productPrice.value,
            category: productCategory.value,
            description: productDesc.value
        }
        if (BtnChange.innerHTML == "add product") {
            productsContainer.push(products);


        } else {
            BtnChange.innerHTML = "add product";
            productsContainer[currentIndex] = products;

        }
        localStorage.setItem('productStorage', JSON.stringify(productsContainer))
        console.log(productsContainer);
        displayData();
        emptyInputs();
    }
}

function emptyInputs() {
    productName.value = '';
    productPrice.value = '';
    productCategory.value = '';
    productDesc.value = '';
    productsContainer.value = '';
}
function displayData() {
    var cartona = ``;
    for (var i = 0; i < productsContainer.length; i++) {
        cartona += `
                <tr>
                    <td>${i}</td>
                    <td>${productsContainer[i].name}</td>
                    <td>${productsContainer[i].price}</td>
                    <td>${productsContainer[i].category}</td>
                    <td>${productsContainer[i].description}</td>
                    <td><button onClick="updateProduct(${i})" class="btn btn-outline-warning">update</button></td>
                    <td><button onClick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
                </tr>`
    }
    document.getElementById("displayTbody").innerHTML = cartona;
}
function checkInputs() {
    let isValid = true; // Assume valid unless proven otherwise
    let errorMessage = '';

    if (productName.value === '' || productName.value.length < 3) {
        errorMessage += "Product Name must be at least 3 characters long.\n";
        isValid = false;
    }

    if (productPrice.value === '' || productPrice.value < 51) {
        errorMessage += "Product Price must be at least 51 pounds.\n";
        isValid = false;
    }

    if (productCategory.value === '' || productCategory.value.length < 3) {
        errorMessage += "Product Category must be at least 3 characters long.\n";
        isValid = false;
    }

    if (productDesc.value === '' || productDesc.value.length < 5) {
        errorMessage += "Product Description must be at least 5 characters long.\n";
        isValid = false;
    }

    if (!isValid) {
        alert(errorMessage);
    }

    return isValid;
}

function deleteProduct(index) {
    productsContainer.splice(index, 1);
    localStorage.setItem("productStorage", JSON.stringify(productsContainer));
    console.log("after delete", productsContainer);
    displayData()
}
function updateProduct(index) {
    currentIndex = index;
    console.log(productsContainer[currentIndex]);


    productName.value = productsContainer[index].name;
    productPrice.value = productsContainer[index].price;
    productCategory.value = productsContainer[index].category;
    productDesc.value = productsContainer[index].description;

    BtnChange.innerHTML = "udate";



}
function searchProduct(letter) {
    var cartona = ``;
    if (letter.trim() != "") {
        for (var i = 0; i < productsContainer.length; i++) {
            if (productsContainer[i].name.toLowerCase().includes(letter.toLowerCase())) {
                cartona += ` <tr>
                    <td>${i}</td>
                    <td>${productsContainer[i].name}</td>
                    <td>${productsContainer[i].price}</td>
                    <td>${productsContainer[i].category}</td>
                    <td>${productsContainer[i].description}</td>
                    <td><button onClick="updateProduct(${i})" class="btn btn-outline-warning">update</button></td>
                    <td><button onClick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
                </tr>`

                console.log("ok enter");
            }
        }//for
    }
    else {
        console.log("search not valid");
        displayData();
        return;
    }
    if (cartona !== '') {
        document.getElementById("displayTbody").innerHTML = cartona;
    } else {
        displayData();
    }
}
function validation() {


}


