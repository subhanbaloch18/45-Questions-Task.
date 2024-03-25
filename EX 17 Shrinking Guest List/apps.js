// EXERCISE 17 (SHRINKING GUEST LIST).
var guest_list = ['Raza', 'Misbah', 'Hamail', 'Qadeer'];
console.log('\nunfortunately I cannot arranged a big table , so incase Only Two persons can join.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry Sir/Madam ".concat(remove_guest, " You are not ivited for dinner tommorow night."));
}
