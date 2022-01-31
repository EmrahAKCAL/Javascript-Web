class UI{
    constructor(){
        this.profileContainer=document.querySelector('#profileContainer');
        this.alert=document.querySelector('#alert');
    }
    showProfile(profile){
        this.profileContainer.innerHTML=`
        <div>
                <div class="card-row">
                    <div >
                        <a href="https://placeholder.com" class="card-img"><img src="https://via.placeholder.com/200x150"></a>
                        <div>
                            <ul class="user-list">
                                <li class="list-brd"> <span class="list-span">Name: </span>${profile.name}</li>
                                <li class="list-brd"> <span class="list-span">Username:</span> ${profile.username}</li>
                                <li class="list-brd"> <span class="list-span">Email:</span> ${profile.email}</li>
                                <li class="list-brd"> <span class="list-span">Phone: </span>${profile.phone}</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                         <p class="userContact">Contact</p>
                        <hr>
                        <ul class="user-list">
                            <li class="list-brd"> <span class="list-span">Address:</span> ${profile.address.street} ${profile.address.city} ${profile.address.zipcode} ${profile.address.suite}</li>
                            <li class="list-brd"> <span class="list-span">Web Site:</span> ${profile.website}</li>
                            <li class="list-brd"><span class="list-span">Company:</span>   ${profile.company.name}</li>
                        </ul>
                    </div>
                </div>
                <div id="todo-list">
                    <div class="todo-title"> To Do List</div>
                    <hr>
                    <ul id="todo">
                    </ul>
                </div>
            </div>
        `;
    }
    showAlert(text){
        this.alert.innerHTML=`${text} is not found.`;
    }
    showTodo(todo){
        let html=``;
        todo.forEach(item=>{
            if(item.completed){
                html+=`
                    <li class="list-brd bg-success">
                        ${item.title}
                    </li>
                `;
            }
            else{
                html+=`
                    <li class="list-brd bg-secondary">
                        ${item.title}
                    </li>
                `;
            }
        })
        this.profileContainer.querySelector('#todo').innerHTML=html;
    }
    clear(){
        this.profileContainer.innerHTML='';
        this.alert.innerHTML='';
    }
}