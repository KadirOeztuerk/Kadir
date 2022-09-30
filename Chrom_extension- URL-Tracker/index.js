let myLeads = []
const inputEl =  document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl =document.querySelector("#ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
let deleteBtn = document.querySelector("#delete-btn")
let tabBtn = document.querySelector("#save-btn")


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        //localStorage.setItem(JSON.stringify(tabs[0].url))
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))

        reander(myLeads)
    })
})


if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    reander(myLeads)
}

//Auflisten der URL unter dem Btn
function reander(leads){
    let listItems = ""
    for (let i = 0; i < leads.length ; i++){   
        //listItems += "<li><a href='" +leads[i] + "'target='_blank'>"+leads[i]+"</a></li>"
        listItems += `
            <li>
                <a href="${leads[i]}" target="_blank">
                    ${leads[i]}
                </a>
            </li>`
        
        //const li = document.createElement("li")
        //li.textContent = myLeads[i]
        //ulEl.append(li)

    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    reander(myLeads)
})


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    reander(myLeads)
    console.log( localStorage.getItem("myLeads") )
})

