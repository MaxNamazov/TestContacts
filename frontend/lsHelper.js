var allContacts = JSON.parse(localStorage.getItem('contacts'));
var counter;
if (allContacts === null){
    allContacts = {};
    counter = 0;
} else {
    counter = Object.keys(allContacts).length;
}
console.log(allContacts);
console.log(counter);

export default {
    getAll : function() {
        return (allContacts);
    },
    get : function(id) {
        return (allContacts[id]);
    },
    create : function(contact) {
        contact.id = counter;
        allContacts[counter] = contact;
        let sAllContacts = JSON.stringify(allContacts);
        localStorage.setItem('contacts', sAllContacts);
        return (counter++);
    },
    update: function(id, contact) {
        allContacts[id] = contact;
        let sAllContacts = JSON.stringify(allContacts);
        localStorage.setItem('contacts', sAllContacts);
        return(true);
    },
    delete: function(id) {
        delete allContacts[id];
        let sAllContacts = JSON.stringify(allContacts);
        localStorage.setItem('contacts', sAllContacts);
        return(true);
    },
    deleteAll: function(id) {
        allContacts = {};
        let sAllContacts = JSON.stringify(allContacts);
        localStorage.setItem('contacts', sAllContacts);
        return(true);
    }
}