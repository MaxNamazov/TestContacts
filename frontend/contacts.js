import 'bootstrap/dist/css/bootstrap.css'
import './style.css';

import lsHelper from './lsHelper.js';

document.addEventListener("DOMContentLoaded", function() {
    let contactsContainer = document.getElementById("contactsContainer");

    renderAll();
    function renderAll (){
        contactsContainer.innerHTML = null;
        let allContacts = lsHelper.getAll();
        Object.keys(allContacts).map(function(objectKey) {
            let contact = allContacts[objectKey];

            let div = document.createElement('div');
            div.className = 'col-md-4 contact';
            div.dataset.id = contact.id;
            div.dataset.name = contact.name;
            let name = document.createElement('div');
            name.className = 'contact__name';
            name.innerHTML = contact.name;
            let tel = document.createElement('div');
            tel.className = 'contact__tel';
            tel.innerHTML = contact.tel;

            div.appendChild(name);
            div.appendChild(tel);
            contactsContainer.appendChild(div);
        });
    }
    contactsContainer.onclick = function(event) {
        let target = event.target;
        while (target !== contactsContainer) {
            if (target.className === 'col-md-4 contact') {
                openContact(target);
                return;
            }
            target = target.parentNode;
        }
    };

    function openContact (e){
        let id = e.dataset.id;
        console.log(id);
    }
    document.getElementById("addContact").addEventListener("click", function() {
        let contact = {
            name: 'test',
            tel: '+380444444444',
            email: 'test',
            skype: 'test',
            facebook: 'test',
            address: 'test'
        };
        lsHelper.create(contact);
        renderAll();
    });
    document.getElementById("deleteAll").addEventListener("click", function() {
        lsHelper.deleteAll();
        renderAll();
    });
});